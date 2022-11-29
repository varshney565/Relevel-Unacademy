/**
 * URI + Http Verb = Restful APIs
 */

const ideaController = require('../controllers/ideaController');

const { Idea } = require('../models/db');

module.exports = (app)=>{
    //127.0.0.1:7777/ideaService/v1/ideas

    //route for creation an idea.
    app.post('/ideaService/v1/ideas', ideaController.create);

    //Need to get all ideas.
    app.get('/ideaService/v1/ideas', ideaController.findAll);
};