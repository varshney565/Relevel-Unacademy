var exp = require('express');
var app = exp();

app.get("/",(req,res)=>{
    res.send("Welcome to Relevel!");
})

app.get("/name",(req,res)=>{
    res.send("Welcome to Relevel! : Shivam");
})

app.get("/company",(req,res)=>{
    res.send("Welcome to Relevel! : Unacademy");
})


app.listen(8000,()=>{
    console.log("Hello I am Listening to 8000");
})