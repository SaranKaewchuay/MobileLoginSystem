const { Sequelize }  = require ('sequelize');

const sequelize = new Sequelize('HealthCareDB', 'root', '', {
    dialect: 'mysql',
    host: 'localhost', 
});

module.exports = sequelize;