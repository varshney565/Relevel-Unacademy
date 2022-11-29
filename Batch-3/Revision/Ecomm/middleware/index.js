const {validateCategoryId,validateCategoryRequest} = require('./category.requestValidator');
const {validateProductId,validateProductRequest} = require('./product.requestValidator');

module.exports = {
    validateCategoryId : validateCategoryId,
    validateCategoryRequest : validateCategoryRequest,
    validateProductId : validateProductId,
    validateProductRequest : validateProductRequest
};