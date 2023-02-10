/**
 * This file will export the functionalities of all the files
 * written inside controller folder
 * 
 * 
 * Single Responsibility Principle.
 */

const auth = require('./auth.controller');
const user = require('./user.controller');

module.exports = {
    signup : auth.signup,
    signin : auth.signin,
    findAll : user.findAll,
    findByUserId : user.findByUserId,
    update : user.update
}