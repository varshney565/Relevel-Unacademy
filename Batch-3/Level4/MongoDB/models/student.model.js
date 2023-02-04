/**
 * Student : name , age
 */

module.exports = (mongoose)=>{
    const studentSchema = new mongoose.Schema({
        name : String,
        age : Number
    });
    return mongoose.model("student",studentSchema);
}