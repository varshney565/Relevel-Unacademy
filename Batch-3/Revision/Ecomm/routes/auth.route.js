/**
 * Handler for signup and signin
 */

const {signup,signin} = require("../controller/auth.controller");

module.exports = (app)=>{
    app.post("/ecom/api/v1/auth/signup",signup);

}