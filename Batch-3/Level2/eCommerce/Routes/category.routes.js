/**
 * This file will be responsible for routing the requests to the correct 
 * controller method.
 */


const controller = require('../Controllers/category.controller');
const Validater = require('../Middleware');
const { verifyToken , isAdmin} = require('../Middleware/auth.jwt');
module.exports = (app)=>{
    //route for fetching all the categories.
    //or applying the filter.
    //route for getting a category based on name.
    app.get("/ecomm/api/v1/categories/",controller.fetchAll);
    //route for creating a new category
    app.post("/ecomm/api/v1/categories",[verifyToken,isAdmin,Validater.validateCategoryRequest],controller.create);
    //route for getting a category based on id
    app.get("/ecomm/api/v1/categories/:id",controller.findOne);
    //route for updating a category based on id
    app.put("/ecomm/api/v1/categories/:id",[verifyToken,isAdmin,Validater.validateCategoryRequest],controller.update);
    //route for deleting a category based on id
    app.delete("/ecomm/api/v1/categories/:id",[verifyToken,isAdmin],controller.delete);
};