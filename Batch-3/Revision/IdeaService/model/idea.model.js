/**
 * This file will have the logic to create idea schema in the database.
 */

module.exports = (sequelize,Sequelize)=>{
    //sequelize is the db_connection
    //Sequelize is the sequelize class
    const idea = sequelize.define("idea",{
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        description : {
            type : Sequelize.STRING,
            allowNull : false
        },
        author : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return idea;
};