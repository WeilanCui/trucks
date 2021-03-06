const db = require("../models/userModels.js");

const appointmentControl = {};
module.exports = appointmentControl;

appointmentControl.getReservations = (req, res, next) => {
  console.log(req.params.username, "hittt mee");
  const query = `SELECT reservations.id, trucks.type, reservations.start, reservations.return_time FROM users INNER JOIN reservations ON user_name=user_username INNER JOIN trucks ON truck_id=trucks.id WHERE user_name='${req.params.username}' ORDER BY reservations.return_time`;
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
  const startRes = req.body.dateRange[0];
  const endRes = req.body.dateRange[1];
  const query = `SELECT trucks.id FROM trucks EXCEPT SELECT reservations.truck_id FROM reservations WHERE '${endRes}'> reservations.start AND '${startRes}'<reservations.return_time`;
  try {
    db.query(query).then((resp) => {
      if (!resp.rows.length) {
        return res.status(200).json({ message: "No Trucks Available" });
      }
      res.locals.truckIds = resp.rows;
      next();
    });
  } catch (err) {
    console.error();
    console.log("error in truckTimes");
  }
};

appointmentControl.truckType = async (req, res, next) => {
  const truckObj = {};
  const ids = res.locals.truckIds;
  try {
    for (let i = 0; i < ids.length; i++) {
      const query = `SELECT type,id FROM trucks WHERE trucks.id='${ids[i].id}'`;
      const resp = await db.query(query);
      let type = await resp.rows[0].type;
      let id = await resp.rows[0].id;
      truckObj[type] ? truckObj[type].push(id) : (truckObj[type] = [id]);
    }
    return res.status(200).json(truckObj);
  } catch (err) {
    console.log("error in truckType ");
    console.error();
  }
};

appointmentControl.reserve = async (req, res, next) => {
  const bookIDs = [];
  const { truckobj } = req.body;
  const types = Object.keys(truckobj);
  types.forEach((type) => {
    if (truckobj[type]) {
      bookIDs.push(...truckobj[type]);
    }
  });
  if (!bookIDs.length) {
    return res
      .status(200)
      .json({
        message:
          "Error in Reserving: please check your reservations and try again",
      });
  }
  
  let flag = false;
  try {
    for (let i = 0; i < bookIDs.length; i++) {
      const query = `INSERT INTO reservations (truck_id, user_username, start, return_time) VALUES ('${bookIDs[i]}', '${req.body.username}','${req.body.dateRange[0]}', '${req.body.dateRange[1]}')`;

      const response = await db.query(query);
      if (!response.rowCount) {
        flag = true;
        continue;
      }
    }
    if (flag) {
      return res
        .status(200)
        .json({
          message:
            "Error in Reserving: please check your reservations and try again",
        });
    }
    return res
      .status(200)
      .json({
        message:
          "Confirmed Reservations: see Login for reservation confirmation",
      });
  } catch (err) {
    console.log("error in reserve");
    console.error();
  }
};
