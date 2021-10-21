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
    User.associate = models => {
        User.hasMany(models.Schedule);
      };
     
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
   
  export default user;

  const schedule = (sequelize, DataTypes) => {
    const Schedule = sequelize.define('schedule', {
      info: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      }
    });
   
    Message.associate = models => {
      Message.belongsTo(models.User);
    };
   
    return Message;
  };
   
  export default message;