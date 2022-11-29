/**
 * REST + HTTP = RESTFUL API's
 */

const {findAll,create} = require("../controller/idea.controller");

module.exports = (app)=>{
    //this is the route for fetching all the ideas.
    app.get("/ideaService/v1/ideas",findAll);
    //this is the route for creating a new idea.
    app.post("/ideaService/v1/ideas",create);
};