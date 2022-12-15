/**
 * This file will have the logic for signup and signin
 */

const bcrypt = require("bcryptjs");
const { user , role , Sequelize} = require("../model");
const Op = Sequelize.Op;
const jwt = require("jsonwebtoken");
const { secret } = require("../config/secret");
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
        if(req.body.roles && req.body.roles.length > 0){
            //add those roles to the user
            role.findAll({
                where : {
                    name : {
                        [Op.or] : req.body.roles
                    }
                }
            }).then(roles=>{
                //set those roles to the userObj
                userCreated.setRoles(roles).then(()=>{
                    console.log("User created successfully");
                    res.status(201).send({
                        message : "User added successfully"
                    });
                });
            })
        }else{
            //add customer role to the user


            // role.findOne({
            //     where : {
            //         name : "customer"
            //     }
            // }).then(Role=>{
            //     return userCreated.setRoles([Role]);
            // }).then(()=>{
            //     console.log("User created successfully");
            //     res.status(201).send({
            //         message : "User added successfully"
            //     });
            // })

            //or

            userCreated.setRoles([1]).then(()=>{
                console.log("User created successfully");
                res.status(201).send({
                    message : "User added successfully"
                });
            });
        }
    }).catch(err=>{
        console.log("some error while creating the user");
        res.status(500).send({
            message : err.name || "some internal error"
        });
    });
}

/**
 * logic for signing in the user.
 */

exports.signin = async (req,res)=>{
    try{
        //find the user
        const User = await user.findOne({where : {email : req.body.email}});
        //check whether password matches or not
        const output = await bcrypt.compare(req.body.password,User.password);
        if(!output){
            console.log("Wrong Password..");
            res.status(400).send({
                message : "Wrong Password"
            });
            return;
        }
        //generate the token
        const token = jwt.sign({id : User.id},secret,{expiresIn : 600});
        //get the roles attached to the user.
        const roles = await User.getRoles();
        const authorities = [];
        for(x of roles){
            authorities.push("ROLE_"+x.name.toUpperCase());
        }
        res.status(200).send({
            id : User.id,
            username : User.username,
            email : User.email,
            roles : authorities,
            accessToken : token
        });
    }catch(err){
        console.log(err);
        console.log("Error while logging in...");
        res.status(500).send({
            message : err.name || "Internal Error"
        });
    }
};