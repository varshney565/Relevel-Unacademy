/**
 * This file will expose the functionality of all the files defined under model folder.
 */

const {sequelize,Sequelize} = require("./db.connection");

//creating the idea schema.
const Idea = require("./idea.model")(sequelize,Sequelize);


module.exports = {
    sequelize : sequelize,
    Sequelize : Sequelize,
    idea : Idea
};

