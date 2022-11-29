/**
 * This file will have the logic to connect with the database.
 * also this file expose the functionality of all the files that are present in the model folder.
 */

const Sequelize = require("sequelize");
const db_confg = require("../config/db.config");
const sequelize = new Sequelize(
    db_confg.DB,
    db_confg.USER,
    db_confg.PASSWORD,
    {
        host : db_confg.HOST,
        dialect : db_confg.dialect,
        pool : {
            max : db_confg.pool.max,
            min : db_confg.pool.min,
            acquire : db_confg.pool.acquire,
            idle : db_confg.pool.idle
        }
    }
);

var db = {};

/**
 * export the Sequelize class and sequelize connection.
 */

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/**
 * exporting the category model.
 */

db.category = require("./category.model")(sequelize,Sequelize);

/**
 * exporting the product model
 */

db.product = require("./product.model")(sequelize,Sequelize);

/**
 * establishing the relationship between product and category
 * 
 * one to many relationship
 */
db.category.hasMany(db.product);
module.exports = db;

