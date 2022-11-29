/**
 * This file will contain the schema for the cart.
 */


module.exports = (sequelize,Sequelize)=>{
    const cart = sequelize.define('cart',{
        id : {
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        cost : {
            type : Sequelize.INTEGER
        }
    });
    return cart;
};