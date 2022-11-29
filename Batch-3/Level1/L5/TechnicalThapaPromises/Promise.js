//Why we need Promises
//To avoid callbackHell

/**
 * Probelm Statement : 
 * 
 * 2s : Fetch all the rollNumbers.
 * 2s : Fetch the details of the student with roll_no 2.
 * 
 */

function GetAllRollNumbers(){
    return new Promise((resolve,reject)=>{
        console.log("Fetching the student RollNos....");
        setTimeout( () => {
            error = false;
            if(!error){
                const roll = [1,2,3,4,5,6,7,8];
                console.log("RollNumbers Fetched ....");
                console.log(roll);
                resolve(roll);
            }else{  
                reject("Error is there...");
            }
        },2000);
    })
}
function GetStudentDetails(roll){
    return new Promise( (resolve,reject) => {
        console.log("Finding the details of the student with rollNumber 2.")
        setTimeout( () => {
            error = false;
            person = {
                name : "shivam",
                age : 22,
                location : "Kurukhetra"
            }
            if(!error)
                resolve(`Hello Students,I am ${person.name} and I am ${person.age} years old and My roll Number is ${roll}.`);
            else
                reject("Error is there...");
        },2000);
    });
}

function Failed(msg){
    console.log(msg);
}

function studentDetails(msg){
    console.log(msg);
}

const promise = GetAllRollNumbers();

promise.then((roolNumber)=>{
    return GetStudentDetails(roolNumber[1]);
}).then(studentDetails).catch(Failed);