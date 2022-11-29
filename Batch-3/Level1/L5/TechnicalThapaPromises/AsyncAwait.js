//Why we need Async await
//For avoiding nesting of then or use of then too much

function getRoll(){
    const GettingStudentRollNumbers = new Promise((resolve,reject)=>{
        console.log("Fetching Student's RollNumbers ....")
        setTimeout( () => {
            const roll = [1,2,3,4,5];
            error = false;
            if(!error){
                console.log("RollNumbers Fetched ....");
                resolve(roll);
            }
            else{
                console.log("RollNumbers Not Fetched Error While Fetching ....");
                reject("Error while Fetching the data");
            }
        },2000)
    })
    return GettingStudentRollNumbers;
}

function GettingStudentDetails(){
    return new Promise( (resolve,reject) => {
        console.log("Fetching the Student Detail....")
        setTimeout( () => {
            err = false;
            data = {
                name : "shivam",
                age : 22,
                placed : 0,
                Dreams : "Still ALive"
            }
            if(err){
                reject("Error while getting the student' details");
            }else{
                resolve(data);
            }
        },2000);
    })
}

async function getData(){
    const response = await getRoll();
    console.log(response);
    const Biodata = await GettingStudentDetails();
    console.log(Biodata);
    return Biodata;
}

const promise = getData().then( (data)=>{
    console.log(data);
});
console.log(promise);

