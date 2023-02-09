const { userStatus , userTypes} = require("../utils/contants");

module.exports = (mongoose)=>{
    const userSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        userId : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            unique : true,
            minLength : 10,
            required : true,
            lowercase : true
        },
        password : {
            type : String,
            required : true
        },
        createdAt : {
            type : Date,
            immutable : true,
            default : ()=>{
                return Date.now();
            }
        },
        updatedAt : {
            type : Date,
            default : () => Date.now()
        },
        userType : {
            type : String,
            required : true,
            default : userTypes.customer
        },
        userStatus : {
            type : String,
            required : true,
            default : userStatus.approved
        }
    });
    return mongoose.model('user',userSchema);
}