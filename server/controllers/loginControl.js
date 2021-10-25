const db = require("../models/userModels.js");

const loginControl = {};
module.exports = loginControl;

loginControl.signIn = (req, res, next) => {
  const findUserQuery = `SELECT * from users where user_name='${req.params.username}' AND password='${req.params.password}'`;

  try {
    db.query(findUserQuery).then((response) => {
      if (response.rowCount) {
        next();
      } else {
        return res.status(200).send("false");
      }
    });
  } catch (err) {
    console.log(err, "logincontrol signIn");
  }
};

loginControl.signUp = (req, res, next) => {
  console.log("signup controller");
  const signUpQuery = `INSERT INTO users (user_name, password) VALUES ('${req.params.username}', '${req.params.password}') ON CONFLICT (user_name) DO NOTHING`;
  try{ db.query(signUpQuery).then((response) => {
    if (!response.rowCount) return res.status(200).send("false");
    return res.status(200).json({ message: "signUp successful" });
  });}catch(err){console.log(err, "loginControl signUp err")}
 
};
