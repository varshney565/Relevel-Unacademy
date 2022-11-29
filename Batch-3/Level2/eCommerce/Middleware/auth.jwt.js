/**
 * Logic to validate the access token.
 */

const jwt = require("jsonwebtoken");
const config = require('../configs/secret.config');
const { User } = require("../Models");

exports.verifyToken = (req,res,next)=>{
    const token = req.headers['x-access-token'];//provided by the client
    if(!token){
        res.status(403).send({
            message : "No token provided"
        });
        return;
    }

    //check the validity of the token
    jwt.verify(token,config.secret,(err,decodedToken)=>{
        if(err){
            res.status(401).send({
                message : "Unauthorized"
            });
            return;
        }
        
        //reading the user from the token and setting it in req body.
        req.userId = decodedToken.id;
        next();
    });
};


//checking the user is admin or not.
exports.isAdmin = (req,res,next)=>{
    //in the previous middle-ware we got the user-id

    //fetch the user from the user-id.
    User.findByPk(req.userId).then((user)=>{
        user.getRoles().then((roles)=>{
            for(let role of roles){
                if(role.name == 'admin'){
                    next();
                    return;
                }
            }
            res.status(403).send({
                message : "Require Admin Access"
            })
            return;
        });
    });
};