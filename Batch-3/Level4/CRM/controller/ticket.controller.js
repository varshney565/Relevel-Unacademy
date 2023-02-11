/**
 * This file will have the logic for manipulating the ticket like : 
 * 
 * creating the ticket
 * updating the ticket
 * fetching all the tickets : admin - all , engineer - assigned to him , customer - created by him
 * 
 * 
 */

const { User, Ticket } = require('../model');
const { userTypes, userStatus } = require('../utils/contants');


/**
 * logic for creating a ticket : 
 * 
 * 1. any authenticated person should be able to create the ticket.
 *          -- Middleware should take care of this(token should be valid).
 * 2. req body should have proper data.
 *          -- Middleware
 * 3. once the ticket is created make sure that engineer and customer records also got updated
 *          -- ticketAssigned and ticketCreated
 * 
 */

exports.createTicket = async (req,res)=>{
    try{
        /**
         * create the ticket.
         */
        const ticket = await Ticket.create({
            title : req.body.title,
            description : req.body.description,
            ticketPriority : req.body.ticketPriority,
            reporter : req.userId           //will got it after verifing access token
        });
        /**
         * Find the available Engineer and assign to the ticket object.
         */
        const query = {
            userType : userTypes.engineer,
            userStatus : userStatus.approved
        }
        
        const engineer = await User.findOne(query).sort({ticketsAssigned : 1}).limit(1);
        ticket.assignee = engineer.userId;
        await ticket.save();
        /**
         * update Engineer record.
         */
        console.log(engineer);
        engineer.openTickets = engineer.openTickets + 1;
        engineer.ticketsAssigned.push(ticket._id);
        await engineer.save();

        /**
         * find the user and update his/her record.
         */
        const user = await User.findOne({userId : req.userId});
        user.ticketsCreated.push(ticket._id);
        await user.save();
        /**
         * return the ticket.
         */
        res.status(201).send(ticket);
    }catch(err){
        console.log(err);
        console.log("Some Internal error while creating the ticket !");
        res.status(500).send({
            message : err.name || "Internal Error"
        })
    }
}


/**
 * logic for searching the tickets.
 * 
 * Admin should be able to search all the tickets.
 * Customer should be able to search the tickets created by him.
 * Engineer should be able to search the tickets assigned to him and also tickets raised by him.
 */

exports.searchTickets = async (req,res)=>{
    /**
     * find the user.
     */
    const user = await User.findOne({
        userId : req.userId
    });
    /**
     * check what type of user it is and depending on that take the action.
     */
    try{
        let query = {};
        if(user.userType == userTypes.customer){
            /**
             * customer user
             * find all the tickets created by that customer.
             * */
            query = {
                _id : {
                    $in : user.ticketsCreated
                }
            };
        }else if(user.userType == userTypes.engineer){
            /**
             * engineer user
             * find the tickets that are created by him and also assigned to him.
             * */

            query = {$or : [
                {
                    _id : {$in : user.ticketsAssigned}
                },
                {
                    _id : {$in : user.ticketsCreated}
                }
            ]};
            /**
             * or 
             * const tickets = user.ticketsAssigned.concat(user.ticketsCreated);
             * query._id = {$in : tickets};
             */
        }
        const tickets = await Ticket.find(query);
        if(tickets){
            res.status(200).send(tickets);
        }else{
            res.status(200).send({
                message : "No ticket has been created !!"
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).send({
            message : err.name || "Internal Error"
        })
    }
}


/**
 * logic for updating the tickets
 * who should be allowed to update the tickts ??
 *      ---- owner of the ticket.
 *      ---- engineer who is assigned to that ticket.
 *      ---- admin user.
 */

exports.updateTicket = (req,res)=>{

}