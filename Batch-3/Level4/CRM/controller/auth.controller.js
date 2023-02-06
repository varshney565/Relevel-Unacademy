/**
 * This file will contain the logic for the registration of the user and login of the user.
 * 
 */

/**
 * 
 * User : 
 * 
 *      Customer : 
 *          1. Registered and is approved by default.
 *          2. Should be able to login immediately.
 *      
 *      Engineer
 *          1. Should be able to registered.
 *          2. Initially he/she will be in pending state.
 *          3. Admin should be able to approve this.
 * 
 *      Admin : 
 *          1. Admin user should be only created from the backend.No API should be supported for this.
 * 
 */

const {User} = require('../model');
const bcrypt = require('bcrypt');

exports.signup = async (req,res)=>{
    /**
     * read the data from the req body.
     */

    const user = {
        userId : req.body.userId,
        name : req.body.name,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8)
    }

    if(req.body.userType &&  req.body.userType == "ENGINEER"){
        user.userStatus = "PENDING"
    }
    /**
     * insert the data in database and return the response
     */
    try{
        const userCreated = await User.create(user);
        console.log(`${userCreated.name} has been added in the database.`);
        /**
         * we should return the newly created user as the response but 
         * we should remove sensitive fields like
         *      - password
         *      - __V
         *      - _id
         * Now we need to create custom response and return
         */
        const response = {
            userId : userCreated.userId,
            name : userCreated.name,
            email : userCreated.email,
            userType : userCreated.userType,
            userStatus : userCreated.userStatus,
            createdAt : userCreated.createdAt,
            updatedAt : userCreated.updatedAt
        }
        
        res.status(201).send({
            message : "Successfully added.",
            user : response
        })
    }catch(err){
        console.log("Some error while creating the user.");
        res.status(500).send({
            messgae : err.name || "Internal Error"
        })
    }
}

exports.signin = (req,res)=>{

}