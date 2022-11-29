//starting file of server.js ...

const express = require('express');
const bodyParser = require('body-parser'); //middleware
const app = express();


app.use(bodyParser.json());                //This middleware parse the json object to js object.


/**
 * I need to create the table ...
 */

const db = require('./models/db');
db.sequelize.sync({force : true}).then(()=>{
    console.log("Tables got re-created....");
}).catch(err=>{
    console.log("Error in creating tables...");
});



/**
 * Import the routes and use it.
 */

require('./routes/idea.routes')(app);

/**
 * Start the server ...
 */

app.listen(7777,()=>{
    console.log("Server started Running ...");
});