let signupValidator = require('./auth.middleware');
let authjwt = require('./auth.jwt');

/**
 * exporting the functionalities of all the middleware functions.
 */
module.exports = {
    signupValidator : signupValidator.validateSignUpRequestBody,
    signinValidator : signupValidator.validateSignInRequestBody,
    verifyToken : authjwt.verifyToken,
    isAdmin : authjwt.isAdmin
}