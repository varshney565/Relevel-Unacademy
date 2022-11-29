/**
 * This file will have the locic to create student table in the database..
 */

const Sequelize = require('sequelize');

//database connection
const sequelize = require('../Utils/database');

/**
 * Logic to create the table ..
 */

const student = sequelize.define('student',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allownull : false
    },
    email : {
        type : Sequelize.STRING,
        allownull : false
    }
});

module.exports = student;