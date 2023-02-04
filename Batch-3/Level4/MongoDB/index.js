/**
 * will use this file to connect to DB and execute queries.
 */

const mongoose = require('mongoose');

/**
 * making a connection to the mongoDB
 */

mongoose.connect("mongodb://localhost/mongoosedemo",()=>{
    console.log("Connected to MongoDB");
},err => {
    console.log("Error : ",err);
});

//DB-Operations
const Student = require("./models/student.model")(mongoose);
async function dbOperation(){
    try{
        const st = await Student.create({
            name : "Shivam",
            age : 22,
            email : "shivamvarshney565@gmail.com",
            subjects : ["OS","C++"],
            address : {
                lane1 : "l1",
                lane2 : "l2",
                street : "s1",
                city : "Banglore",
                country : "India",
                pincode : 111111
            }
        });
        console.log(st); 
    }catch(err){
        console.log("Error : ",err);
    }
}
dbOperation();