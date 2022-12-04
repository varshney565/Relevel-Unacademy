/**
 * Logic for creating a cart
 */

const { cart } = require("../model")

exports.create = (req,res)=>{

    //get the userId from req
    const Cart = {
        userId : req.userId
    }

    cart.create(Cart).then(Cart=>{
        console.log("Cart created successfully");
        res.status(201).send(Cart);
    }).catch(err=>{
        console.log("Error while creating the cart.");
        res.status(500).send({
            message : err.name || "Internal Error"
        });
    })
}

/**
 * Logic for updating a cart
 */

exports.update = (req,res)=>{
    
}


/**
 * Logic for deleting a cart
 */

/**
 * Logic for getting a cart based on id
 */


/**
 * Logic for getting all the carts
 */