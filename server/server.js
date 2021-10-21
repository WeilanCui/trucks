const express = require("express");
const { Sequelize, Model, DataTypes} = require('sequelize');

const app = express();
app.use(express.json());
const PORT = 3001;

const user = '<postgres user>'
const host = 'localhost'
const database = 'chariotTrucks'
const password = '<postgres password>'
const port = '<postgres port>'

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})

app.get("/", (req, res) => {
  return res.status(200).send("hiksjdflksjdfl");
})

app.get("/truckAvailability", (req,res)=>{

})
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
