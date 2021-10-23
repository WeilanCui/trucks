const db = require("../models/userModels.js");
let query = `SELECT * from trucks`;
let add = `INSERT INTO trucks (type)
VALUES ('small')`;
let createStuff = `CREATE TABLE SALES`;

db.query(query);
const loginControl = {};

loginControl.example = (req, res, next) => {
  console.log("inside login controller");
  console.log(req.params.username);
  console.log(req.params.password);
  const findUserQuery = `SELECT user_name, password from users where user_name='${req.params.username}' AND password='${req.params.password}'`;
  db.query(findUserQuery).then((response) => {
    console.log(response, "yoooohooooo");
    // if (response.rowCount){console.log('found it')}
    response.rowCount? console.log('found it'): console.log('not registered user')
  });
};
module.exports = loginControl;
