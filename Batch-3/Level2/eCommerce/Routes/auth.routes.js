/**
 * This file will have all the routes needed for authentication.
 */

const { checkUsernameOrEmail,RolesChecker } = require('../Middleware');
const authController = require('../Controllers/auth.controller');

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup",[checkUsernameOrEmail,RolesChecker],authController.signup);
    app.post("/ecomm/api/v1/auth/signin",[],authController.signin);
}