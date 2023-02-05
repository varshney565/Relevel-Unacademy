/**
 * This is the starting point of the application.
 */

const express = require("express");
const app = express();

require("./config/server.config");

app.listen(process.env.PORT,()=>{
    console.log("server started running on port number : ",process.env.PORT);
})