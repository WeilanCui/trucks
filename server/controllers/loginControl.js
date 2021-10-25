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

// db.query(`ALTER TABLE users ADD CONSTRAINT U_name_constraint UNIQUE (user_name)`)

//asking for any users with reservations--yes it works!!!!
// const query='SELECT * FROM users INNER JOIN reservations ON user_name=user_username'
// const query3=`SELECT FROM reservations where user_username='q' INNER JOIN reservations ON user_name=user_username `

//this works it is selective
// const attempt=`SELECT * FROM users INNER JOIN reservations ON user_name=user_username WHERE user_name='q'`

// const query2=`IF EXISTS (SELECT * FROM users WHERE user_name='q' AND password='q') THEN SELECT INNER JOIN reservations ON user_name=user_username; END IF`

// this works selects user and respective reservations
// const attempt2=`SELECT * FROM users INNER JOIN reservations ON user_name=user_username WHERE user_name='no' AND password='res' ORDER BY start`

// db.query(attempt3).then((resp)=>console.log(resp, "meeeeee"))
