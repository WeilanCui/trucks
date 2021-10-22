const Sequelize = require('sequelize');
const db= require('./index.js')

const reservation = (db, DataTypes) => {
  const Reservation = db.define("reservation", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    info: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  });

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.User);
  };

  return Reservation;
};

module.exports = reservation;
