let signupValidator = require('./auth.middleware');
module.exports = {
    signupValidator : signupValidator.validateSignUpRequestBody,
    signinValidator : signupValidator.validateSignInRequestBody
}