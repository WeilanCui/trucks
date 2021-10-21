  const reservation = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('reservation', {
      info: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      }
    });
   
    Reservation.associate = models => {
      Reservation.belongsTo(models.User);
    };
   
    return Reservation;
  };
   
export default reservation;