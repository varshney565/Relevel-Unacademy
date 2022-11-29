/**
 * This file will contain schema details of the user.
 */

module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define('user',{
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        username : {
            type : Sequelize.STRING,
            allowNull : false
        },
        password : {
            type : Sequelize.STRING,
            allowNull : false
        },
        email : {
            type : Sequelize.STRING,
            allowNull : false
        }
    });
    return User;
};