
//creating the express object.
const express = require('express');
const app = express();

//using body-parser ...
const body_parser = require('body-parser');
app.use(body_parser.json()); 


const config = require('./configs/server.config');
const {sequelize,Sequelize,categories,Product,User,Role} = require('./Models');


//Initialize the routes for categories.
require('./Routes/category.routes')(app);
//Initialize the routes for products.
require('./Routes/product.routes')(app);
//Routes for authentication.
require('./Routes/auth.routes')(app);
//Routes for cart
require('./Routes/cart.route')(app);


/**
 * Listening to the port
 */
app.listen(config.PORT,()=>{
    console.log("Server started Running on port number : ",config.PORT);
});


/**
 * Setup the relationship between product and category.
 */

categories.hasMany(Product); //1 to M relationship.

/**
 * This function should be executed at the begining of the app startup
 */

function init(){
    /**
     * Create some initial categories.
     */
    const Category = [
        {
            name : "Electronics",
            description : "This category will contain all the electronic products."
        },
        {
            name : "Kitchen",
            description : "This category will contain all the Kitchen products."
        }
    ];
    categories.bulkCreate(Category);

    const Roles = [
        {
            id : 1,
            name : "customer"
        },{
            id : 2,
            name : "admin"
        }
    ];
    Role.bulkCreate(Roles);
}

sequelize.sync({force : true}).then(()=>{
    console.log("Fetched Successfully");
    init();
}).catch((err)=>{
    console.log("some Error : ",err);
});