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

  db.query(query).then((resp) => {
    if (!resp.rows.length)
      return res.status(200).json({ message: "No Trucks Available" });
    res.locals.truckIds = resp.rows;
    next();
  });
};

appointmentControl.truckType = async (req, res, next) => {
  const truckObj = {};
  const ids = res.locals.truckIds;

  const stuff = await Promise.all(
    ids.map(async (k) => {
      const query = `SELECT id, type FROM trucks WHERE id='${k.id}'`;
      return db.query(query);
    })
  );

  stuff.forEach((resp) => {
    let type = resp.rows[0].type;
    let id = resp.rows[0].id;
    truckObj[type] ? truckObj[type].push(id) : (truckObj[type] = [id]);
  });

  return res.status(200).json(truckObj);
};

appointmentControl.reserve = (req, res, next) => {
  console.log(req.body.dateRange[1]);
  const query = `INSERT INTO reservations (truck_id, user_username, start, return_time) VALUES ('1', 'q','${req.body.dateRange[0]}', '${req.body.dateRange[1]}')`;
  db.query(query).then((resp) => {
    console.log(resp, "reserve controller");
    if (resp.rowCount) {
      return res.status(200).json({ message: "reserved confirmation" });
    }
    return res.status(200).json({ message: "cant reserve try again" });
  });
};
