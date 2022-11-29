/**
 * This file will have the actual logic for handling the routes.
 */


const {sequelize,Sequelize,idea} = require("../model");

exports.create = (req,res)=>{
    const newIdea = {
        author : req.body.name,
        name : req.body.name,
        description : req.body.description
    };
    idea.create(newIdea).then(data => {
        res.status(201).send(data);
    }).catch(err=>{
        console.log("error while creating the idea");
        res.staus(500).send({
            message : err.name || "Internal Error"
        });
    });
};


exports.findAll = (req,res)=>{
    idea.findAll().then((ideas)=>{
        console.log("Ideas fetched successfully");
        res.status(200).send(ideas);
    }).catch((err)=>{
        console.log("error while fetching the ideas");
        res.status(500).send({
            message : err.name || "Internal Error"
        });
    });
};