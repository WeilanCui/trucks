const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());


const loginControl = require("./controllers/loginControl.js");
const appointmentControl= require("./controllers/appointmentControl.js")

app.get("/login/:username/:password", loginControl.signIn, appointmentControl.getReservations, (req, res) => {
  // console.log(req.body);
  // res.status(200).send("longin server");
  return
});

app.get("/signUp/:username/:password", loginControl.signUp, (req, res) => {
  console.log("server signUP");
  // console.log(req.params.username)
  res.status(200).send("signUp server");
});

app.post("/truckAvailability", appointmentControl.truckTimes, (req, res) => {
  // console.log(req.body)
  res.status(200).send("true")
});

app.post('/reserve',appointmentControl.reserve, (req,res)=>{
  res.status(200).json({message:'reserve'})
})
app.use('*', (req,res)=>{
  res.status(404).send('page not found')
})
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
