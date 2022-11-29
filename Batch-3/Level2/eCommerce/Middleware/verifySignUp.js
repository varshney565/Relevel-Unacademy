/**
 * Validation for duplicate username and email.
 */
const { User, Role ,roles } = require("../Models");

exports.checkUsernameOrEmail = (req,res,next)=>{
    //check for username
    User.findOne({
        where : {
            username : req.body.username
        }
    }).then((user)=>{
        if(user){
            res.status(400).send({
                message : "Failed!! ,username already exists"
            });
            return;
        }

        //user with that username is not present.
        //check for email.

        User.findOne({
            where : {
                email : req.body.email
            }
        }).then((user)=>{
            if(user){
                res.status(400).send({
                    message : "Failed!! ,email already exists"
                });
                return;
            }
            next();
        })
    })
};



/**
 * Validation for correct roles.
 */


exports.RolesChecker = (req,res,next)=>{
    const ReqRoles = req.body.roles;
    if(ReqRoles){
        for(let role of ReqRoles){
            if(!roles.includes(role)){
                res.status(404).send({
                    message : `No such role : [ ${role} ].`
                });
                return;
            }
        };
    }
    next();
}