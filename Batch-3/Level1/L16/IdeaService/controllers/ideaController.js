/**
 * This is the controller file 
 *  ---> where the logic resides.
 */


const db = require('../models/db');  //object

const Idea = db.Idea;

//create a new idea -- function

exports.create = (req,res)=>{
    const idea = {
        author : req.body.author,
        name : req.body.name,
        desc : req.body.desc
    }
    //Inerting data
    Idea.create(idea).then(data=>{
        res.send(data).status(201);
    }).catch(err=>{
        res.send({
            message : err.message || "Inernal Error"
        }).status(500);
    });
};


//Getting all the ideas..
exports.findAll = (req,res)=>{
    Idea.findAll().then(ideas=>{
        res.status(200).send(ideas);
    }).catch(err=>{
        res.status(500).send({
            message : err || "Internal Error"
        });
    })
};   
