/**
 * This file will route the incoming request to the corroponding user.controller method.
 */

const { findAll } = require("../controller/user.controller");
const { isAdmin, verifyToken } = require("../middleware");

module.exports = (app)=>{
    /**
     * GET    "/crm/api/v1/users?userType='CUSTOMER'&userStatus='ACCEPTED'"
     * GET    "/crm/api/v1/users"
     */
    app.get("/crm/api/v1/users",[verifyToken ,isAdmin],findAll);
    /**
     * GET    "/crm/api/v1/users/:id"
     */

    /**
     * PUT    "/crm/api/v1/users/:id"
     */

}