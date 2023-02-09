/**
 * This file will validate the token and also checks whether user is admin or not.
 */

const jwt = require('jsonwebtoken');
const { User } = require('../model');
const { userTypes } = require('../utils/contants');

exports.verifyToken = async (req,res,next)=>{
    /**
     * checking if token is provided or not.
     */
    let token = req.headers['x-access-token'];
    if(!token){
        console.log("No token Provided !");
        res.status(400).send({
            message : "No token provided"
        })
        return;
    }
    /**
     * verifying the token
     */
    try{
        const result = await jwt.verify(token,process.env.secret);
        req.body.userId = result.id;
    }catch(err){
        console.log("Not a valid token !!");
        res.status(401).send({
            message : "Not a valid token !!"
        })
        return;
    }

    //everything is ok
    next();
}


exports.isAdmin = async (req,res,next)=>{
    /**
     * I will have the userId already in the req body that i have got from verifySignup method.
     */

    /**
     * find the user whose userId is req.body.userId
     */

    const user = await User.findOne({userId : req.body.userId});
    if(user.userType != userTypes.admin){
        console.log("You don't have permission,only ADMIN has the provision.");
        res.status(403).send({
            message : "You don't have permission,only ADMIN has the provision"
        });
        return;
    }
    /**
     * everything is ok , pass the control to next middleware.
     */

    next();
}