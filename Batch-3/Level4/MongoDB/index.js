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
        
        /**
         * deleting the collection
         */

        // await Student.collection.drop();
        // const st1 = await Student.create({
        //     name : "Shivam",
        //     age : 22,
        //     email : "shivamvarshney565@gmail.com",
        //     subjects : ["OS","C++"],
        //     address : {
        //         lane1 : "l1",
        //         lane2 : "l2",
        //         street : "s1",
        //         city : "Banglore",
        //         country : "India",
        //         pincode : 111111
        //     }
        // });
        
        // const st2 = await Student.create({
        //     name : "Vishwa",
        //     age : 44,
        //     email : "kankvish@gmail.com",
        //     subjects : ["Data Science"],
        //     address : {
        //         lane1 : "l3",
        //         lane2 : "l4",
        //         street : "s41",
        //         city : "Banglore",
        //         country : "India",
        //         pincode : 141111
        //     }
        // });
        // const st3 = await Student.create({
        //     name : "Varshney",
        //     age : 22,
        //     email : "shivamvar@gmail.com",
        //     subjects : ["Artificial Intelligence"],
        //     address : {
        //         lane1 : "l1",
        //         lane2 : "l2",
        //         street : "s1",
        //         city : "Banglore",
        //         country : "India",
        //         pincode : 111121
        //     }
        // });
        // const st4 = await Student.create({
        //     name : "Vishal",
        //     age : 25,
        //     email : "vray@gmail.com",
        //     subjects : ["UPSC"],
        //     address : {
        //         lane1 : "l1",
        //         lane2 : "l2",
        //         street : "s1",
        //         city : "Banglore",
        //         country : "India",
        //         pincode : 111111
        //     }
        // });
        // console.log(st1,st2,st3,st4);



        /**
         * 1 : Find a record/document based on Id.
         */
        try{
            const st = await Student.findById("63df821bbf6293ad1915c802"); // This is fast because 
            // indexing is create on id by default.             
            console.log(st);
        }catch(err){
            console.log("Some Error while fetching the document based on id.");
        }

        /**
         * 2 : Find a record/document based on Name.
         */
        try{
            // const st = await Student.find({name : "Vishwa"}); //it will return array of documents
            const st = await Student.findOne({name : "Vishwa"}); //Linear Search 
            //because indexing is not created on name field so it will be slow
            //if we want this query to become fast we have to apply indexing 
            //on that field.
            console.log(st);
        }catch(err){
            console.log("Some error while fetching a user based on Name.");
        }

        /**
         * 3 : deleting any existing record
         */

        try{
            // const st = await Student.delete({name : "Vishwa"}); //all the record where name is Vishwa will be deleted
            const st = await Student.deleteOne({name : "Vishwa"}); //only the first matching document will be deleted
            console.log(st);
        }catch(err){
            console.log("Some Error While deleting the document.");
        }

        /**
         * 4 : Some Complex queries
         */
        /**
         * a) : using where clause
         */
        try{
            const st = await Student.where("age").gt(20);
            console.log(st);
        }catch(err){
            console.log("some error while fetching users where age > 20");
        }
        /**
         * b) : using operators
         */
        try{
            const st = await Student.where("age").gt(20).where("name").equals("Varshney");
            console.log(st);
        }catch(err){
            console.log("some error while fetching users where age > 20");
        }
    }catch(err){
        console.log("Error : ",err);
    }
}
dbOperation();