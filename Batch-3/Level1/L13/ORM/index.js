/**
 * This is the main starting file.In this we will make use of 'model' to create table in database.
 */

//Get Hold of db connection.
const sequelize = require('./Utils/database');

//Get Hold of Student Schema.
const Student = require('./Models/student');

//Get Hold of Marksheet Schema.
const Marksheet = require('./Models/maeksheet');


/**
 * Game Begins : 
 * Main Logic to create Table.
 * 
 * {force : true}   --> every time application will run,tables will be deleted and created new.
 * sequelize.sync({force : true}); --> return a promise.
 */

/**
 * Relationship
 * one to many
 */
Student.hasMany(Marksheet); //this will be used to establish the relationship

sequelize.sync({force : true}).then(result=>{
    // console.log(result);

    /**
     * Add Logic to insert data into the table.
     */
    return Student.create({
        name : "vishwa Mohan",
        email : "vishwa_mohan@gmail.com"
    });
}).then(student=>{
    // console.log("Student got inserted ",student);
    /**
     * Now We should have the logic to insert marksheet record.
     */

    // Marksheet.create({
    //     marks:49 
    // });

    return student.createMarksheet({
        marks : 99
    });
}).then(marksheet=>{
    console.log("Marksheet Got updated for the student.",marksheet);
})
.catch(err=>{
    console.log(err);
});
