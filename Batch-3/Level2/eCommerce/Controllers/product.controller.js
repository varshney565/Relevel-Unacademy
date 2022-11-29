/**
 * Controller class for product.
 * 
 * This file will have all the logic for proceesing the incoming requests.
 */


/**
 * Handler for creating the product
 */

const {Product} = require('../Models');

exports.create = (req,res)=>{

    /**
     * Get the req body.
     */
    const product = {
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
        categoryId : req.body.categoryId
    }

    /**
     * Create the product.
     */
    Product.create(product).then((product)=>{
        console.log(`product [ ${product.name} ] added successfully.`);
        res.status(201).send(product);
    }).catch((err)=>{
        console.log(`Error while creating the product [ ${product.name} ]`);
        res.status(500).send({
            message : err || "Internal Error"
        })
    });
};


/**
 * Handler for get all products
 */

exports.fetchAll = (req,res)=>{
    const ProductName = req.query.name;
    let Promise;
    if(ProductName){
        Promise = Product.findAll({
            where : {
                name : ProductName
            }
        })
    }else{
        Promise = Product.findAll();
    }

    Promise.then((products)=>{
        console.log("Products Fetched Successfully...");
        res.status(200).send(products);
    }).catch((err)=>{
        console.log("Error while Fetching the Products...");
        res.status(500).send({
            message : err || "Internal Error"
        });
    });
};

/**
 * Handler for getting a product based on id.
 */

exports.findOne = (req,res)=>{
    /**
     * Id of the product that is needed to be searched.
     */
    const Pid = req.params.id;
    /**
     * Finding the product based on id.
     */
    
    Product.findByPk(Pid).then((product)=>{
        console.log(`Product with id [ ${Pid} ] Fetched Successfully.`);
        res.status(200).send(product);
    }).catch((err)=>{
        console.log(`Error while Fetching the product with id : [ ${Pid} ]`);
        res.status(500).send({
            message : err || "Internal Error"
        });
    });
}

/**
 * Handler for updating the product
 */

exports.update = (req,res)=>{
    /**
     * Get the req body
     */

    const product = {
        name : req.body.name,
        description : req.body.description,
        cost : req.body.cost,
        categoryId : req.body.categoryId
    }

    /**
     * Which product needed to be updated.
     */

    const Pid = req.params.id;

    /**
     * Time to update the product.
     */

    Product.update(product,{
        where : {
            id : Pid
        },
        returning : true
    }).then((updatedProduct)=>{
        return Product.findByPk(Pid);
    }).then((updatedProduct)=>{
        console.log(`Product with id [ ${Pid} ] updated successfully.`);
        res.status(200).send(updatedProduct);
    }).catch((err)=>{
        console.log(`Error while updating the product with id [ ${Pid} ]`);
        res.status(500).send({
            message : err || "Internal Error"
        });
    });
};

/**
 * Handler for deleting the product.
 */


exports.delete = (req,res)=>{
    /**
     * Find which product needs to be deleted.
     */
    const Pid = req.params.id;

    /**
     * It's time to delete the product.
     */

    Product.destroy({
        where : {
            id : Pid
        }
    }).then((product)=>{
        console.log("Product deleted successfully.")
        res.status(200).send({
            message : "Product deleted successfully"
        });
    }).catch((err)=>{
        console.log("Error while deleting the product.")
        res.status(500).send({
            message : err || "Internal Error"
        });
    });
};

