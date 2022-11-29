const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');

app.use(morgan());

app.listen(5555,()=>{
    console.log("Server started Running...");
});

/**
 * First MiddleWare should create path.
 */

app.use((req,res,next)=>{
    const fileName = req.url;
    filePath = path.join(__dirname,"files",fileName);
    //Associate filePath to req object so that it can be used.
    req.filePath = filePath;
    next();//this will give the control to next MW.
});

/**
 * Second MiddleWare should create response.
 */

app.use((req,res,next)=>{
    fs.stat(req.filePath,(err,fileInfo)=>{
        if(err){
            next();
            return;
        }
        if(fileInfo.isFile()){
            res.sendFile(req.filePath);
            return;
        }else{
            next();
        }
    });
});


/**
 * Third MiddleWare should handle error if any.
 */

app.use((req,res,next)=>{
    console.log("Error is present in the file...");
    next();
});