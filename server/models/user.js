const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    });
    
    //one user has many reservations
    //CASCADE if delete user reservations are deleted too
    User.associate = models => {
        User.hasMany(models.Reservation, { onDelete:'CASCADE'});
      };
     
      //can find user by login which is username or email
      User.findByLogin = async login => {
        let user = await User.findOne({
          where: { username: login },
        });
     
        if (!user) {
          user = await User.findOne({
            where: { email: login },
          });
        }
     
        return user;
      };
    return User;
  };
  export default user