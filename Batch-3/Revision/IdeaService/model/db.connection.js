/**
 * this file will have the logic to connect with the database.
 */

/**
 * I need db credientials for creating the connection
 */
const Sequelize = require("sequelize");
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    dialect : dbConfig.dialect,
    host : dbConfig.HOST
});

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
};