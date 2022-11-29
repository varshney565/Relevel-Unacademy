const express = require("express");
const app = express();

const path = require("path");

app.listen(8080,()=>{
    console.log("Server started running");
});

app.get("/files/:file",(req,res)=>{
    console.log(req.params.file);
    res.end("done");
});

