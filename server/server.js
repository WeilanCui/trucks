const express = require("express");
const app = express();
const PORT = 3001;
app.use(express.json());

const loginControl=require('./controllers/loginControl.js')

// app.get('/', (req,res)=>{
//   console.log("hit endpoint")
//   res.status(200).send("howdy")
// })

app.get('/login/:username/:password',
loginControl.signIn,
(req,res)=>{
  console.log(req.body)

  res.status(200).send("longin server")
})


app.get('/signUp/:username/:password',
loginControl.signUp,

(req,res)=>{
  console.log('server signUP')
  console.log(req.params.username)
  res.status(200).send("signUp server")
})

app.get("/truckAvailability", (req, res) => {});
app.listen(PORT, () => console.log(`server listening on ${PORT}`));
