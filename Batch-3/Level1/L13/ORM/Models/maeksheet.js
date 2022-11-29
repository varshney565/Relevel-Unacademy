/**
 * This file is used to create the marksheet table..
 */

const Sequelize = require('sequelize');

//database connection ..
const sequelize = require('./../Utils/database');


//creating Marksheet Table ..
const Marksheet = sequelize.define('marksheet',{
    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true    
    },
    marks : {
        type : Sequelize.INTEGER,
        allowNull : false
    }
});


module.exports = Marksheet;