/**
 * This file will contain a schema defination for the category resource. 
 * 
 */

module.exports = (sequelize,Sequelize)=>{
    const Category = sequelize.define('category',{
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        name : {
            type : Sequelize.STRING,
            allowNull : false
        },
        description : {
            type : Sequelize.STRING,
            allowNull : false
        }
    },{
        tableName : 'categories' //name of the table by default plural.
    });
    return Category;
}