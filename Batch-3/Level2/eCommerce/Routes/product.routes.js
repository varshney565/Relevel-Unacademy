/**
 * routing the incoming product request with correct controller method.
 */

const controller = require('../Controllers/product.controller');
const validator  = require('../Middleware/requestValidator');
const { verifyToken , isAdmin} = require('../Middleware/auth.jwt');

module.exports = (app)=>{
    //route for getting all the products or fetching a category based on 
    //query param
    app.get("/ecomm/api/v1/products/",controller.fetchAll);
    //route fot getting a product based on id.
    app.get("/ecomm/api/v1/products/:id",controller.findOne);
    //route for creating a product
    app.post("/ecomm/api/v1/products/",[verifyToken,isAdmin,validator.validateProductRequest],controller.create);
    //route for updating the product
    app.put("/ecomm/api/v1/products/:id",[verifyToken,isAdmin,validator.validateProductRequest],controller.update);
    //route for deleting the product
    app.delete("/ecomm/api/v1/products/:id",[verifyToken,isAdmin],controller.delete);
}