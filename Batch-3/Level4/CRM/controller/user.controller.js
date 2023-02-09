/**
 * This file will have the logic to fetch users based on (filter) userType,userStatus,... or fetch all the users.
 * 
 */

const { User } = require("../model");
const objectConvertor = require('../utils/objectConverter');

/**
 * Fething all the users.
 */
exports.findAll = async (req,res) => {
    /**
     * checking if anything has been provided in query-params or not.
     */
    const queryObj = {};
    const userType = req.query.userType;
    const userStatus = req.query.userStatus;
    const name = req.query.name;
    if(userStatus){
        queryObj.userStatus = userStatus;
    }
    if(userType){
        queryObj.userType = userType;
    }
    if(name){
        queryObj.name = name;
    }
    /**
     * finding the users.
     */
    try{
        const users = await User.find(queryObj);
        console.log(users);
        const Response = objectConvertor(users);
        res.status(200).send(Response);
    }catch(err){
        console.log("some internal error while fetching the users");
        res.status(500).send({
            message : err.name || "Internal Error"
        });
    }
}

