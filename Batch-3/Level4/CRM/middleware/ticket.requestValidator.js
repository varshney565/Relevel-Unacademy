/**
 * this file will validate the req body of ticket.
 */

const { User, Ticket } = require("../model");
const { userTypes, userStatus } = require("../utils/contants");

/**
 * validating the request body for create method.
 */

exports.validateReqBodyForCreatingTicket = async (req,res,next)=>{
    /**
     * Madatory fields -
     * 
     * title,
     * description,
     * 
     */
    if(!req.body.title){
        console.log("No title of the ticket provided !");
        return res.status(400).send({
            message : "No title of the ticket provided !"
        })
    }
    if(!req.body.description){
        console.log("No description of the ticket provided !");
        return res.status(400).send({
            message : "No description of the ticket provided !"
        })
    }


    /**
     * 
     * ticketPriority can be decided by the fact how urgent the ticket issue is or depending on the type of user.
     *      --- Gold User will get priority 1.
     *      --- Premium User will get priority 2.
     *      --- Normal User will get priority 3.
     *          (depending on the subscription they choose)
     * 
     * 
     * deciding type of user(Gold,Premium,Free) can only be decided by the admin user.
     * 
     * in that case ticketPriority should be strictly not allowed to pass in the request body.
     *  
     * only admin can change the type of user(while updating).
     */


    /**
     * check is there any Engineer available or not
     */
    const engineer = await User.findOne({
        userType : userTypes.engineer,
        userStatus : userStatus.approved
    });
    if(!engineer){
        console.log("No enginner available ,all engineers are on strike !!!");
        return res.status(403).send({
            message : "No enginner available ,all engineers are on strike, kindly check after some time !"
        })
    }

    /**
     * everything is ok,pass the control to next method
     */
    next();
}


/**
 * middleware for checking whether the caller who is tring to update the ticket is either
 * 
 * admin
 * owner
 * assignee
 */

exports.isValidTicketUpadteAccess = async (req,res,next)=>{
    /**
     * we will get userId after validating the ticket.
     */

    const user = await User.find({userId : req.userId});

    /**
     * ticketId will be provided in the path param.
     */
    const ticket = await Ticket.find({})
}