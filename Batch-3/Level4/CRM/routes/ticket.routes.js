const { createTicket, searchTicket } = require('../controller');
const { verifyToken, validateReqBodyForCreatingTicket } = require('../middleware');

module.exports = (app)=>{
    /**
     * route for creating a ticket
     * 
     * PUT    https://localhost:/8080/crm/api/v1/tickets
     */
    app.post("/crm/api/v1/tickets", [ validateReqBodyForCreatingTicket,verifyToken ] ,createTicket);
    /**
     * route for searching a ticket.
     * 
     * 
     * GET    https://localhost:/8080/crm/api/v1/tickets
     */
    app.get("/crm/api/v1/tickets", [verifyToken] , searchTicket);

}