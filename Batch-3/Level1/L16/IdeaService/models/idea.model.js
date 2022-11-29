/**
 * This file contain the information about idea model.
 */

module.exports = (sequelize,Sequelize)=>{
    //sequelize -->representing db connection
    //Sequelize -->representing Sequelize class

    //This function should return Idea

    const Idea = sequelize.define('idea',{
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true 
        },
        author : {
            type : Sequelize.STRING,
            allownull : false 
        },
        name : {
            type : Sequelize.STRING,
            allownull : false 
        },
        desc : {
            type : Sequelize.STRING,
            allownull : false 
        }
    })
    return Idea;
};