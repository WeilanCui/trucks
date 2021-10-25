const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());


const loginControl = require("./controllers/loginControl.js");
const appointmentControl= require("./controllers/appointmentControl.js")

//uses express error handling from controller object

app.get("/login/:username/:password", loginControl.signIn, appointmentControl.getReservations, (req, res) => {
  return res.status(400).json({message:'login error'})
});

app.get("/signUp/:username/:password", loginControl.signUp, (req, res) => {
  console.log("server signUP");
  res.status(400).json({message:'signUp error'});
});

app.post("/truckAvailability", appointmentControl.truckTimes, appointmentControl.truckType, (req, res) => {
  res.status(200).send("true")
});

app.post('/reserve',appointmentControl.reserve, (req,res)=>{
  return res.status(400).json({message:'reserve error'})
})

app.listen(PORT, () => console.log(`server listening on ${PORT}`));
