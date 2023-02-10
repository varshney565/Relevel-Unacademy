let signupValidator = require('./auth.middleware');
let authjwt = require('./auth.jwt');
let userActivities = require('./user.middleware');

/**
 * exporting the functionalities of all the middleware functions.
 */
module.exports = {
    signupValidator : signupValidator.validateSignUpRequestBody,
    signinValidator : signupValidator.validateSignInRequestBody,
    verifyToken : authjwt.verifyToken,
    isAdmin : userActivities.isAdmin,
    isValidUserIdInPathparam : userActivities.isValidUserIdInPathparam,
    isOwnerOrAdmin : userActivities.isOwnerOrAdmin,
    isAdminUpdate : userActivities.isAdminUpdate
}