const Cartcontroller = require('../Controllers/cart.controller');
const {verifyToken,validateCartRequest} = require('../Middleware');

module.exports = (app)=>{
    //Route for creating the cart
    app.post("/ecomm/api/v1/carts",[verifyToken],Cartcontroller.createCart);
    //Route for updating the cart
    app.put("/ecomm/api/v1/carts/:id",[verifyToken,validateCartRequest],Cartcontroller.updateCart);
    //Route for fetching the cart
    app.get("/ecomm/api/v1/carts/:id",[verifyToken],Cartcontroller.getCart);
};