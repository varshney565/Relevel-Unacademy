//require the server.
const express = require('express');
const app = express();

//always write above lines.
app.listen(5555,()=>{
    console.log("Server has started");
});


//Getting the routes that we want ...
app.get("/names",(req,res)=>{
    res.send("Hello Name");
});

app.get("/hello",(req,res)=>{
    res.send("Hello Back");
});

app.get("/questions",(req,res)=>{
    res.send("Answer");
});

/**
 * I want to provide the data based on  the user id.
 * users/1 ----> data about user with id 1.
 * users/2 ----> data about user with id 2.
 * 
 * 
 * one way is that we create some API's with users/1,users/2,......seperately.
 * but if new user got added we have to write API call for that user also..
 */

/**
 * path param ---> path parameter.
 * 
 * users/:userID
 */

app.get("/users/:userID",(req,res)=>{
    id = req.params.userID;
    console.log("Getting the user's details...");
    res.send("Fetching the data of user : " + id);
});


/**
 * MiddleWare.
 */
