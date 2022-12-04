const { validateCategoryId , validateCategoryRequest } = require('./category.requestValidator');
const { validateProductId , validateProductRequest } = require('./product.requestValidator');
const { signupRequestValidator , signinRequestValidator } = require("./auth.requestValidator");
const { verifyToken , isAdmin} = require("./auth.jwt");

module.exports = {
    validateCategoryId : validateCategoryId,
    validateCategoryRequest : validateCategoryRequest,
    validateProductId : validateProductId,
    validateProductRequest : validateProductRequest,
    signinRequestValidator : signinRequestValidator,
    signupRequestValidator : signupRequestValidator,
    verifyToken : verifyToken,
    isAdmin : isAdmin
};