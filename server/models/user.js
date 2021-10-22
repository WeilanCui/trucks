// const Sequelize = require('sequelize');
// const db= require('./index.js')

// const user = (db, DataTypes) => {
//     const User = db.define('user', {
//       username: {
//         type: Sequelize.STRING,
//         unique: true,
//         allowNull: false,
//         validate: {
//           notEmpty: true,
//         },
//       },
//       password:{
//         type:Sequelize.STRING,
//       },
//       email:{
//         type:Sequelize.STRING
//       },
//       id:{
//         type:Sequelize.INTEGER, 
//         autoIncrement: true
//       }
//     });
    
//     // one user has many reservations
//     // CASCADE if delete user reservations are deleted too
//     User.associate = models => {
//         User.hasMany(models.Reservation, { onDelete:'CASCADE'});
//       };
     
//       //can find user by login which is username or email
//       User.findByLogin = async login => {
//         let user = await User.findOne({
//           where: { username: login },
//         });
     
//         if (!user) {
//           user = await User.findOne({
//             where: { email: login },
//           });
//         }
     
//         return user;
//       };
//     // return User;
//   };
//  module.exports= user