/**
 * This file is used to connect to database.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CRM',()=>{
    console.log("application is connected with the database");
},err=>{
    console.log("Error while connecting with database.");
});

const User = require('./user.model');