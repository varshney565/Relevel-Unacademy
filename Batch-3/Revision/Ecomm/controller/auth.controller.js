/**
 * This file will have the logic for signup and signin
 */

const bcrypt = require("bcryptjs");
const { user , role , Sequelize} = require("../model");
const { Op } = Sequelize.Op;
exports.signup = (req,res)=>{
    /**
     * get the req body
     */
    const userObj = {
        username : req.body.username,
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password,8)
    }
    
    user.create(userObj).then(userCreated=>{
        //add the role to the user
        return role.findAll({
            where : {
                name : {
                    [Op.or] : req.body.role
                }
            }
        })
    }).then(roles=>{
        //now set these roles with user
        return userCreated.setRoles(roles);
    }).then(()=>{
        console.log("User successfully registered....");
        res.status(201).send({
            message : "User added successfully"
        });
    }).catch(err=>{
        console.log("Error while signing up");
        res.status(400).send({
            message : err.name || "Internal Error"
        });
    });
}