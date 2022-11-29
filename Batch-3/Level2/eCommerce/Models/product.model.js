/**
 * This file will contain the schema for products.
 * 
 * Product : 
 * 
 * 
 * 
 * id
 * name
 * description 
 * cost
 */

module.exports = (sequelize,Sequelize)=>{
    const Product = sequelize.define('product',{
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
        },
        cost : {
            type : Sequelize.INTEGER,
            allowNull : false
        }
    },{
        tablename : 'products'
    })
    return Product;
}