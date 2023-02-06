/**
 * This file will expose all the collections that will be present in the mongoDB database.
 */

const mongoose = require('mongoose');


/**
 * getting the user collection.
 */
const User = require('./user.model')(mongoose);


db = {};
db.mongoose = mongoose;
db.User = User;
module.exports = db;