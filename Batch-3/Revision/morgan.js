const express = require("express");
const app = express();

const morgan = require("morgan");
app.listen(8080,()=>{
    console.log("Server started running");
});
app.use(morgan("short"));

app.get("/names",(req,res)=>{
    res.status(200).send("Fetched the names successfully");
});
