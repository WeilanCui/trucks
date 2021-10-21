import Sequelize from 'sequelize';
 
const sequelize = new Sequelize(
  "chariotTrucks",
  "weilancui",
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);
 
const models = {
  User: sequelize.import('./user'),
  Reservation: sequelize.import('./reservation'),
};
 
Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});
 
export { sequelize };
 
export default models;