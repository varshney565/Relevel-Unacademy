/**
 * This file is responsible for routing the incoming request to the corrosponding controller method.
 * 
 * This file has the routes for signup and signin
 */

const { signup } = require("../controller");

module.exports = (app)=>{
    /**
     * POST   /crm/api/v1/auth/signup
     */
    app.post("/crm/api/v1/auth/signup",[],signup);
}