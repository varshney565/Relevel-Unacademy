const express = require('express');
const app = express();
const fs = require('fs');
//path is used to get the path of the desired location irrespective of the OS.
const path = require('path');

app.listen(5555,()=>{
    console.log("Server is started.");
})

app.use((req,res,next)=>{
    //localhost:5555/name_of_the_file
    var filename = req.url;
    var filepath = path.join(__dirname,"files",filename);
    console.log(filepath);
    //fs.stat will give all the information at that perticuler location..
    fs.stat(filepath,(err,fileInfo)=>{
        if(err){
            next(); //give control to the next MW.
            return;
        }
        if(fileInfo.isFile()){
            res.sendFile(filepath);
        }else{
            next(); //give control to the next MW.
        }
    });
});


app.use((req,res,next)=>{
    res.send("Welcome to Hell!").status(200);
});