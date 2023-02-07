/**
 * This file is responsible for routing the incoming request to the corrosponding controller method.
 * 
 * This file has the routes for signup and signin
 */

const { signup, signin } = require("../controller");

module.exports = (app)=>{
    /**
     * sign up : 
     * 
     * POST   /crm/api/v1/auth/signup
     */
    app.post("/crm/api/v1/auth/signup",[],signup);
    /**
     * sign in : 
     * 
     * POST /crm/api/v1/auth/signin
     */
    app.post("/crm/api/v1/auth/signin",[],signin);
}