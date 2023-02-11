const { createTicket } = require("../controller/ticket.controller");
const { verifyToken, validateReqBodyForCreatingTicket } = require('../middleware');

module.exports = (app)=>{
    app.post("/crm/api/v1/tickets", [ validateReqBodyForCreatingTicket,verifyToken ] ,createTicket);
}