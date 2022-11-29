const express = require('express');
const app = express();

const bodyParser = require('body-parser');


//------------------------------Layer1
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));
//------------------------------
const users = [
    {
        name : "shivam",
        age : 22
    },
    {   
        name : "Aakash",
        age : 45
    },
    {
        name : "Gupta",
        age : 32
    },
    {
        name : "Rahul",
        age : 25
    }
];


//---------------------------------------Layer2
app.get("/",(req,res)=>{
    res.write("Home Page");
    res.end();
})

/**
    app.get("/users/1",(req,res)=>{
        res.send(users[0]);
    });

    app.get("/users/2",(req,res)=>{
        res.send(users[1]);
    });

    app.listen(8080,()=>{
        console.log("Hello I am listening to 8080");
    });
*/


/**
 * How to get the variable name as user/1,2,3,4,........
 */


app.get("/users/:userID",(req,res,next)=>{
    if(req.params.userID > users.length){
        next();
        return;
    }
    res.send(users[req.params.userID-1]);
});

app.delete("/users/:userID",(req,res,next)=>{
    console.log("Deleting The User ....")
    const id = req.params.userID;
    if(id > users.length){
        next();
        return;
    }else{
        users.splice(id-1,1);
        console.log("User Deleted Successfully");
        res.send("User Deleted Successfully.").status(200);
        console.log(users);
    }
});

app.post("/user",(req,res)=>{
    console.log("Adding The User ....");
    users.push(req.body);
    res.write("User is added to the database ...");
    res.end().status(201);
    //201 --> creation of user done successfully ....
    console.log(users);
});

//--------------------------------------------
app.listen(8080,()=>{
    console.log("Hello I am listening to 8080");
});


/**
 * MiddleWare
 */


//-----------------------------Layer3
app.use((req,res,next)=>{
    console.log("shivam varshney");
    res.send("I am at the shivam page.").status(200);
});

//----------------------------


//----------------------Layer4
app.use((req,res,next)=>{
    console.log("Incorrect Url ...");
    console.log(req.url);
    next();
});

//-----------------------------------