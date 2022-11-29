/**
 * This file will do the main action.
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./model");

/**
 * Make the connecton to db and create the schema
 */

db.sequelize.sync({force:true}).then(()=>{
    console.log("connection established and tables created");
}).catch((err)=>{
    console.log("error while syncing the database with js code");
})

/**
 * Importing the routes
 */

require("./routes/idea.routes")(app);

/**
 * Start the server.
 */

app.listen(8080,()=>{
    console.log("App is started");
});