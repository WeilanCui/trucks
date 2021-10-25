const db = require("../models/userModels.js");

const appointmentControl = {};
module.exports = appointmentControl;

appointmentControl.getReservations = (req, res, next) => {
  console.log(req.params.username, "hittt mee");
  const query = `SELECT reservations.id, trucks.type, reservations.start, reservations.end FROM users INNER JOIN reservations ON user_name=user_username INNER JOIN trucks ON truck_id=trucks.id WHERE user_name='${req.params.username}' ORDER BY reservations.end`;
  try {
    db.query(query).then((response) => {
      if (!response.rowCount) {
        return res
          .status(200)
          .json({ message: "no reservations made", name: req.params.username });
      }
      res.status(200).json({ name: req.params.username, data: response.rows });
    });
  } catch (err) {
    console.log(err, "appointmentControl getReservations");
  }
};

appointmentControl.truckTimes = (req, res, next) => {
  console.log(req.body);
};

appointmentControl.reserve = (req, res, next) => {
  console.log(req.body.dateRange[1]);
  const query=`INSERT INTO reservations (truck_id, user_username, start, return_time) VALUES ('1', 'q','${req.body.dateRange[0]}', '${req.body.dateRange[1]}')`
    db.query(query).then((resp)=>{
     console.log(resp, "reserve controller")
     res.status(200).json({message:"got it"})
    })
};

// if (start<AlreadyEnd && End> AlreadyStart){then exclude}

//grabs truck values except when matches
// const query = `SELECT trucks.id, trucks.type FROM trucks LEFT JOIN reservations ON truck_id=trucks.id WHERE truck_id IS NULL`;

//add condition where filter through time so instead of where use exclude

// const queryEx=`SELECT trucks.id, trucks.type FROM trucks LEFT JOIN reservations ON truck_id=trucks.id WHERE truck_id IS NULL`

// db.query(query).then((respo)=>console.log(respo))
