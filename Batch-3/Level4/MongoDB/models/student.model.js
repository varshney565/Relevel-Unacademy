/**
 * Student : name , age
 */



module.exports = (mongoose)=>{
    const addressSchema = new mongoose.Schema({
        lane1 : String,
        lane2 : String,
        street : String,
        city : String,
        country : String,
        pincode : Number
    });

    const studentSchema = new mongoose.Schema({
        name : {
            type : String,
            required : true
        },
        age : {
            type : Number,
            required : true,
            min : 16,
            max : 200
        },
        email : {
            type : String,
            unique : true,
            required : true,
            minLength : 10,
            lowercase : true
        },
        createdAt : {
            type : Date,
            default : () => Date.now(),
            immutable : true
        },
        updatedAt : {
            type : Date,
            default : ()=> Date.now()
        },
        subjects : {
            type : [String],
            validate : {
                validator : s => s.length,
                message : props => "subject list can't be empty"
            }
        },
        address : addressSchema  //Embedded document
    });
    return mongoose.model("student",studentSchema);
}