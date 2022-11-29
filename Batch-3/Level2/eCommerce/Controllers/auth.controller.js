/**
 * This file will be used for authentication.
 */


/**
 * Handler for signup
 */

const {Role,User} = require('../Models');
const bcryptjs = require('bcryptjs');
const {Sequelize} = require('../Models');
const op = Sequelize.Op;
//it will contain all the operators that are needed in databse.
const jwt = require('jsonwebtoken');
const secreatKey = require('../configs/secret.config');

exports.signup = (req,res)=>{

    //Getting the user details ....
    const user = {
        username : req.body.username, 
        email : req.body.email,
        password : bcryptjs.hashSync(req.body.password,8) //hashing the user password in async manner.
    };
    
    User.create(user).then((user)=>{
        console.log("User Created");
        //user is successfully Created.

        if(req.body.roles){
            //time to assign the role to that user
            //but for that I need to have some roles first in the system.


            //I need to assign only those roles that got passed in the body and also matches with the supported roles.
            Role.findAll({
                where : {
                    name : {
                        [op.or] : req.body.roles
                    }
                }
            }).then((roles)=>{
                //roles assigned successfully.
                user.setRoles(roles).then(()=>{
                    console.log("Registration is successfull");
                    res.status(201).send({
                        message : "User Successfully registered."
                    });
                })
            });
        }else{
            //default role customer will be added.
            Role.findOne({
                where : {
                    name : "customer"
                }
            }).then((role)=>{
                user.setRoles(role).then(()=>{
                    console.log("Registration is successfull");
                    res.status(201).send({
                        message : "User Successfully registered."
                    });
                })
            })

            //Another Way

            /**
             * user.setRoles([1]).then(()=>{
             *     console.log("Registration is Successfull")
             *     res.status(201).send({
             *          message : "user Successfully registered";
             *     });
             * })
             * 
             * 
             * Here we are passing the id of all the roles in setRoles([id1,id2,id3,....]).
             */
        }
    }).catch((err)=>{
        console.log("Error while creating the user.");
        res.status(500).send({
            message : err || "Some Internal Error"
        });
    });
};



/**
 * Handler for signIn
 */

exports.signin = (req,res)=>{
    //find the user with emailId
    User.findOne({
        where : {
            email : req.body.email
        }
    }).then((user)=>{
        //if no such user with that email id in the database.
        if(!user){
            console.log("No such user.");
            res.status(404).send({
                message : "USER NOT FOUND"
            });
            return;
        }
        
        //user with that emailId exists.
        //check whether entered password is correct or not.
        result = bcryptjs.compareSync(
            req.body.password,user.password
        )
        //result is false,means that password is wrong.
        if(!result){
            console.log("Invalid password");
            res.status(401).send({
                message : "Invalid Password"
            });
            return;
        }

        //here email and password both are correct so generate a access token..
        const token = jwt.sign({id : user.id},secreatKey.secret,{
            expiresIn : 300 //Time after which this token expires(in ms).
        });

        var authorities = [];
        user.getRoles().then((roles)=>{
            for(let x of roles){
                authorities.push("ROLE_"+x.name.toUpperCase());
            }

            res.status(200).send({
                id : user.id,
                username : user.username,
                email : user.email,
                roles : authorities,
                accessToken : token
            });
        })
    }).catch((err)=>{
        console.log("Internal Error");
        res.status(500).send({
            message : err || "Internal Error"
        });
    })
};