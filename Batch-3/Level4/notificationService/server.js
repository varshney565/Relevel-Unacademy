/**
 * express for creating the server.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
/**
 * body parser
 */
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
/**
 * setting the configurable data to process.env.
 */
require('./config');

/**
 * making the connection with the database.
 */



/**
 * starting the server.
 */

app.listen(process.env.PORT,()=>{
    console.log("server started running at port : ",process.env.PORT);
});
