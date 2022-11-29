/**
 * This file will expose the functionalities of all the model files defined under the model directory.
 */


//Fetching the config file
const config = require('../configs/db.config');

//create the connection with db.
const Sequelize = require('sequelize');
const sequelize = new Sequelize( config.DB,config.USER ,config.PASSWORD , {
    dialect : config.dialect,
    host : config.HOST,
    pool : {
        max : config.pool.max,
        min : config.pool.min,
        acquire : config.pool.acquire,
        idle : config.pool.idle
    }
});


//create the category...
const categories = require('./Category.model')(sequelize,Sequelize);

//Create The Product...
const Product = require('./product.model')(sequelize,Sequelize);

//User Schema
const User = require('./user.model')(sequelize,Sequelize);

//Role for User
const Role = require('./role.model')(sequelize,Sequelize);

//create the cart
const cart = require('./cart.model')(sequelize,Sequelize);

/**
 * Exporting the sequelize and category model.
 */
exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.categories = categories;
exports.Product = Product;
exports.User = User; 
exports.Role = Role;
exports.Cart = cart;

/**
 * Many to Many Relationship.
 */

Role.belongsToMany(User,{
    through : "user_roles",//which table
    foreignKey : "role_id",
    otherKey : "user_id"
});

User.belongsToMany(Role,{
    through : "user_roles",
    foreignKey : "user_id",
    otherKey : "role_id"
});

/**
 * List of valid Roles.
 */

exports.roles = ['customer','admin'];


/**
 * Establish the relationship between
 * 1.user and cart      one to many
 * 2.cart and product   many to many
 */


/**
 * Relationship btw User and cart.
 */
User.hasMany(cart);


/**
 * Relationship btw cart and Product.
 */

Product.belongsToMany(cart,{
    through : 'cart_product',
    primaryKey : 'product_id',
    otherKey : 'cart_id'
});

cart.belongsToMany(Product,{
    through : 'cart_product',
    primaryKey : 'cart_id',
    otherKey : 'product_id'
});