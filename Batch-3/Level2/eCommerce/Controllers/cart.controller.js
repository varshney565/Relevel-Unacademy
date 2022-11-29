/**
 * Handler for creating the cart request.
 */

const { Cart, Product } = require("../Models");
const {Op} = require('sequelize');
exports.createCart = (req,res)=>{
    //cart that needed to be created.
    const cart = {
        userId : req.userId
    };

    Cart.create(cart).then((cart)=>{
        console.log(`cart for user with id : [ ${cart.userId} ] created successfully!!`);
        res.status(201).send(cart);
    }).catch((err)=>{
        console.log("Error while creating the cart.");
        res.status(500).send({
            message : err || "Internal Error"
        });
    });
};  

/**
 * Handler for updating the cart.
 */


//updating the whole cart.
exports.updateCart = (req,res)=>{
    const cartId = req.params.id;

    /**
     * first  : i have to find the cart with that cart id
     * 
     * second : i have to find all objects of such products with given id in productIds.
     * 
     * Third  : as product and cart has many to many relationship so add those products in that cart.
     * 
     * Fourth : update the cost of the cart.
     */
    
    Cart.findByPk(cartId).then((cart)=>{
        //what are the products that needed to be added in the cart.
        var productIds = req.body.productIds;
        
        Product.findAll({
            where : {
                id : {
                    [Op.or] : productIds
                }
            }
        }).then((products)=>{
            //all the products with the corrosponding object and cart is there.
            if(products.length == 0){
                res.status(403).send({
                    message : "Products trying to add does't exist"
                });
                return;
            }
            
            cart.setProducts(products).then(()=>{
                console.log("Products added in the cart successfully");
                cart.getProducts().then((cartProducts)=>{
                    var cost = 0;
                    var CartProducts = [];
                    for(let Pro of cartProducts){
                        cost += Pro.cost;
                        CartProducts.push({
                            id : Pro.id,
                            name : Pro.name,
                            description : Pro.description,
                            categoryId : Pro.categoryId
                        });
                    }
                    const newCart = {
                        id : cart.id,
                        cost : cost,
                        userId : cart.userId
                    };
                    
                    cart.update(newCart,{
                        where : {
                            id : newCart.id
                        }
                    }).then(()=>{
                        res.status(200).send({
                            cartProducts,cost
                        });
                    }).catch((err)=>{
                        console.log("Error while updating the cost of the cart");
                        res.status(500).send({
                            message : err || "Internal Error"
                        });
                    });
                });
            }).catch((err)=>{
                console.log("Error while updating the cart...");
                res.status(500).send({
                    message : err || "Some Internal Error"
                });
            });
        }).catch((err)=>{
            console.log("Error while fetching the products..");
            res.status(500).send({
                message : err || "Some Internal Error"
            });
        });
    }).catch((err)=>{
        console.log("Error while Fetching the cart..");
        res.status(500).send({
            message : err || "some Internal Error"
        });
    });
};


/**
 * Search for a cart based on the id.
 */
exports.getCart = (req,res)=>{
    const cartId = req.params.id;
    Cart.findByPk(cartId).then((cart)=>{
        cart.getProducts().then((products)=>{
            var cartProducts = [];
            for(let product of products){
                cartProducts.push({
                    id : product.id,
                    name : product.name,
                    description : product.description,
                    categoryId : product.categoryId
                });
            }
            res.status(200).send({
                cost : cart.cost,
                cartProducts : cartProducts
            });
        }).catch((err)=>{
            console.log("Error while fetching the cart details.");
            res.status(500).send({
                message : err || "Internal Error"
            });
        })
    }).catch((err)=>{
        console.log("Error while fetching the cart.");
        res.status(500).send({
            message : err || "Internal Error"
        });
    })
};