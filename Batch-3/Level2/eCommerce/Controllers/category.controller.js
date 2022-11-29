/**
 * This file is the controller aka the waiter in the hotel
 * 
 * 
 * This file will have all the logic that is needed for processing the request.
 */


/**
 * Handler for create a new category request.
 */

const {categories} = require('../Models');

exports.create = (req,res)=>{
    const category = {
        name : req.body.name,
        description : req.body.description
    }

    categories.create(category).then((category)=>{
        console.log(`New Category Named : [ ${category.name} ] Added Successfully in the db.`); 
        res.status(201).send(category);
    }).catch((err)=>{
        console.log(`Error in inserting the category name : [ ${category.name} ]. Error Message : [ ${err.message} ]`);
        res.status(500).send({
            message : err || "some internal error happened."
        });
    });
};

/**
 * Handler for getting all the categories.
 */

/**
 * Handler for getting any category with 
 * 
 * localhost:8080/ecomm/api/v1/categories/?name=electronics          ----- Query param
 * 
 * 
 * 
 * 
 * path param               localhost:8080/ecomm/api/v1/categories/123                 123 is path param
 * query param              localhost:8080/ecomm/api/v1/categories/123?a=b             considered to be optimal
 */

exports.fetchAll = (req,res)=>{
    const categoryName = req.query.name;        //will get electronics stored in categoryName
    console.log(categoryName);
    /**
     * If i get a query param ,which is name , i should apply the name filter
     * else,no filter.
     */
    let promise;
    if(categoryName){
        promise = categories.findAll({
            where : {
                name : categoryName
            }
        });
    }else{
        promise = categories.findAll();
    }

    promise.then((Categories)=>{
        console.log("Categories Fetched Successfully.");
        res.status(200).send(Categories);
    }).catch((err)=>{
        console.log("Error while Fetching the categories.");
        res.status(500).send({
            message : err || "Some Internal Error"
        });
    });
};

/**
 * Handler for getting the category based on id.
 */

exports.findOne = (req,res)=>{
    const CategoryId = req.params.id;
    categories.findByPk(CategoryId).then((category)=>{
        console.log(`Category with id : [ ${CategoryId} ] Fetched successfully.`);
        res.status(200).send(category);
    }).catch((err)=>{
        console.log(`Error while Fetching the category with id : [ ${CategoryId} ]`);
        res.status(500).send({
            message : err || "Internal Error"
        });
    });
};


/**
 * Handler for deleting the category with id.
 */

exports.delete = (req,res)=>{
    const CategoryId = req.params.id;
    categories.destroy({
        where : {id : CategoryId}
    }).then((result)=>{
        //result will be either 0 or 1,if deleted 1,else 0.
        res.status(200).send({
            message : "Successfully deleted the Category."
        });
    }).catch((err)=>{
        res.status(500).send({
            message : "Some Internal Error while deleting the category."
        });
    });
};



/**
 * Handler for updating any category with id.
 * 
 * PUT : 127.0.0.1:8080/ecomm/api/v1/categories/:id
 * 
 * 
 * JSON object
 */

exports.update = (req,res)=>{
    /**
     * Need to know which category has to be updated.
     */
    const categoryId = req.params.id;

    /**
     * I need to parse the req body from JSON to JS object.
     */
    const category = {
        name : req.body.name,
        description : req.body.description
    }

    /**
     * It's time to update the category.
     */
    categories.update(category,{
        where : {
            id : categoryId
        },
        returning : true
    }).then((updatedCategory)=>{
        /**
         * I need to return the updated category.
         */
        return categories.findByPk(categoryId);
    }).then((updatedObj)=>{
        console.log(`category with id : [ ${categoryId} ] updated successfully`);
        res.status(200).send(updatedObj);
    }).catch((err)=>{
        console.log(`Error while updating the category with id [ ${categoryId} ]`);
        res.status(500).send({
            message : err || "Internal Server Error"
        });
    });
};