/**
 * This class will have the logic to connect to the database.
 */

const Sequelize = require('sequelize');

//Make a Mysql connection
const sequelize = new Sequelize('sequelize_demo','root','0000',{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;