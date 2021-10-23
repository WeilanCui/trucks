const express = require("express");

const app = express();
app.use(express.json());
const PORT = 3001;

// const db= require('./models/userModels.js')
// let query=`SELECT * from trucks`
// let add=  `INSERT INTO trucks (type)
// VALUES ('small')`
// let createStuff=`CREATE TABLE SALES`
app.get('/', (req,res)=>{
  console.log("hit endpoint")
  res.status(200).send("howdy")
})

app.get('/login/:username/:password' ,(req,res)=>{
  console.log("server login")
  console.log(req.params.username)
  console.log(req.params.password)
  res.status(200).send("longin server")
})
app.get("/truckAvailability", (req, res) => {});
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
