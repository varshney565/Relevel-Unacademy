/**
 * This file will conststs of middlewares for validating the request body.
 */

const {categories,Product, Cart} = require('../Models');

/**
 * Validate the request body for categories.
 */

exports.validateCategoryRequest = (req,res,next)=>{
    /**
     * check for name.
     */
    if(!req.body.name){
        res.status(400).send({
            message : "Name of the category is not provided."
        });
        return;
    }
    /**
     * check for description.
     */
    if(!req.body.description){
        res.status(400).send({
            message : "Description of the category is not provided."
        });
        return;
    }
    /**
     * Go to the controller.
     */
    next();
};


/**
 * Validate the request body of products.
 */

exports.validateProductRequest = (req,res,next)=>{
    /**
     * Validating the name.
     */

    if(!req.body.name){
        res.status(400).send({
            message : "Name of the product is not provided."
        });
        return;
    }

    /**
     * Validating the description.
     */

    if(!req.body.description){
        res.status(400).send({
            message : "Description of the product is not provided."
        });
        return;
    }

    /**
     * Validating the cost.
     */

    if(!req.body.cost){
        res.status(400).send({
            message : "Cost of the product is not provided."
        });
        return;
    }

    if(req.body.cost <= 0){
        res.status(400).send({
            message : "Cost of the product is not correct."
        });
        return;
    }

    /**
     * validation of the category_id.
     */

    if(!req.body.categoryId){
        res.status(400).send({
            message : "category Id of the product is not provided."
        });
        return;
    }

    
    categories.findByPk(req.body.categoryId).then((category)=>{
        if(!category){
            res.status(400).send({
                message : "Category Id is not valid"
            });
            return;
        }
        next();
    }).catch((err)=>{
        console.log(`Some Internal Error while Fetching the details of category with id : [ ${req.body.categoryId} ]`);
        res.status(500).send({
            message : err || "Internal Error"
        });
        return;
    });
};


exports.validateCartRequest = async (req,res,next)=>{
    var productIds = req.body.productIds;
    var cartId = req.params.id;

    /**
     * validating whether such cart exists or not with that cartId.
     */

    try{
        const cart = await Cart.findByPk(cartId);
        if(!cart){
            res.status(400).send({
                message : "No such cart exists"
            });
            return;
        }
    }catch(error){
        console.log("Some Internal Error while fetching the cart");
        res.status(500).send({
            message : ""
        });
        return;
    }

    /**
     * I have to check whether all the product Ids that are passed are valid or not.
     */
    
    for(let productId of productIds){
        try{
            const product = await Product.findByPk(productId);
            if(!product){
                console.log("No such product exists");
                res.status(403).send({
                    message : `No such product exists with id : [ ${productId} ]`
                });
                return;
            }
        }catch(error){
            console.log(`Error while fetching the product with id : [ ${productId} ]`);
            res.status(500).send({
                message : "Some Internal Error while fetching the product"
            });
            return;
        };
    }
    next();
};