const db = require("../models/userModels.js");

const loginControl = {};
module.exports = loginControl;

loginControl.signIn = (req, res, next) => {
  //   console.log("inside login controller");
  const findUserQuery = `SELECT * from users where user_name='${req.params.username}' AND password='${req.params.password}'`;
  try {
    db.query(findUserQuery).then((response) => {
      console.log(response, "yoooohooooo");
      if (response.rowCount) return res.status(200).send("true");
      else {
        return res.status(200).send("false");
      }
    });
  } catch (err) {
    if (err) console.log(err, "loginControl signIn");
  }
};

loginControl.signUp = (req, res, next) => {
  console.log("signup");
  const signUpQuery = `INSERT INTO users (user_name, password) VALUES ('${req.params.username}', '${req.params.password}') ON CONFLICT (user_name) DO NOTHING`;
  try {
    db.query(signUpQuery).then((response) => {
      if (!response.rowCount) return res.status(200).send("false");
      res.status(200).json("signUp successful");
    });
  } catch (err) {
    if (err) console.log(err, "loginControl signUp");
  }
};

// db.query(`ALTER TABLE users ADD CONSTRAINT U_name_constraint UNIQUE (user_name)`)

// db.query(``)
