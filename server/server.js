const express = require("express");
// const { Sequelize, Model, DataTypes } = require("sequelize");
// const models = require('./models')
// const {db, models} = require('./models/index.js')
const app = express();
app.use(express.json());
const PORT = 3001;
// const user= require('./models/user.js')
// const {sequelize}=require('./models/index.js')
// sequelize.sync().then(() => {
//   app.listen(3002, () => {
//     console.log(`Example app listening on port ${3002}`)
//   });
// });
// const {db}= require("../models/index.js")
const db= require('./models/userModels.js')
let query=`SELECT * from trucks`
let add=  `INSERT INTO trucks (type)
VALUES ('small')`
let createStuff=`CREATE TABLE SALES`

app.get("/", async(req, res) => {
  db.query(query).then((response)=>console.log(response, 'hiiii'))

  // user.findAll().then(user=>{
  //   console.log(user)
  //   res.sendStatus(200)
  // })
  // const jane= await User.create({ username:"Jane"})
  // console.log(jane instanceof models.User)
  // try {
  //   await db.authenticate();
  //   console.log('Connection has been established successfully.');
  // } catch (error) {
  //   console.error('Unable to connect to the database:', error);
  // }
  return res.status(200).send("hiksjdflksjdfl");

  
});
app.get('/login')
app.get("/truckAvailability", (req, res) => {});
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
