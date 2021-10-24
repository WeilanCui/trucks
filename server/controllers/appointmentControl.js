const db = require("../models/userModels.js");

const appointmentControl = {};
module.exports = appointmentControl;

appointmentControl.create = (req, res, next) => {};

appointmentControl.getReservations = (req, res, next) => {
  console.log(req.params.username, "hittt mee");
  const attempt3 = `SELECT reservations.id, trucks.type, reservations.start, reservations.end FROM users INNER JOIN reservations ON user_name=user_username INNER JOIN trucks ON truck_id=trucks.id WHERE user_name='${req.params.username}' ORDER BY reservations.end`;
  try {
    db.query(attempt3).then((response) => {
      if (!response.rowCount) {
        return res.status(200).json({message:"no reservations made",name:req.params.username});
      }
      res.status(200).json({name:req.params.username,
        data:response.rows});

      
    });
  } catch (err) {
    console.log(err, "appointmentControl get reservations...");
  }
};


appointmentControl.truckTimes=(req,res,next)=>{
  console.log(req.body)
}



