const db = require("../models/userModels.js");

const loginControl = {};
module.exports = loginControl;

loginControl.signIn = (req, res, next) => {
  console.log("inside login controller");
//   console.log(req.params.username);
//   console.log(req.params.password);
  const findUserQuery = `SELECT * from users where user_name='${req.params.username}' AND password='${req.params.password}'`;

  db.query(findUserQuery).then((response) => {
    console.log(response, "yoooohooooo");
    // if (response.rowCount){console.log('found it')}
    if (response.rowCount)return res.status(200).send('true')
     else { return res.status(200).send('false')}
  });
};

loginControl.signUp=(req,res,next)=>{

    const signUpQuery=`INSERT user (user_name, password) VALUES ('${req.params.username}', '${req.params.password}')`
    //add if conflict
    console.log(req.params.username)

    //if successful 
    //if failed
    return res.status(200).send('false')
}


