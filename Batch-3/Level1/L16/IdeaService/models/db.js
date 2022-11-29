/**
 * This file contains the logic to connect to the database..
 */


//I need db configs
const config = require('../configs/db_config');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB,config.USER,config.PASSWORD,{
    dialect : config.dialect,
    host : config.HOST
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Idea = require('./idea.model')(sequelize,Sequelize);

/**
 * I am exporting multiple attributes.
 */

module.exports = db;