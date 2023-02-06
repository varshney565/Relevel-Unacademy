/**
 * This file will export the functionalities of all the files
 * written inside controller folder
 * 
 * 
 * Single Responsibility Principle.
 */

const auth = require('./auth.controller');


module.exports = {
    signup : auth.signup,
    signin : auth.signin
}