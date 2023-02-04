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
    const st = await Student.create({
        name : "Shivam",
        age : 22
    });
    console.log(st);
}
dbOperation();