const db = require("../models/userModels.js");

const loginControl = {};
module.exports = loginControl;

loginControl.signIn = (req, res, next) => {
//   console.log("inside login controller");
  const findUserQuery = `SELECT * from users where user_name='${req.params.username}' AND password='${req.params.password}'`;

  db.query(findUserQuery).then((response) => {
    console.log(response, "yoooohooooo");
    if (response.rowCount)return res.status(200).send('true')
     else { return res.status(200).send('false')}
  });
};

loginControl.signUp=(req,res,next)=>{

    const signUpQuery=`INSERT INTO users (user_name, password) VALUES ('${req.params.username}', '${req.params.password}') ON CONFLICT (user_name) DO NOTHING`

    db.query(signUpQuery).then((response)=>{
        if (!response.rowCount)return res.status(200).send('false')
        res.status(200).json('signUp successful')
    })
    
    res.status(200)
}

