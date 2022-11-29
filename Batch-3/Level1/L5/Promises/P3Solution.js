/**
 * How can we solve this problem ???
 * using peomises ...
 */

const students = [
    {name : "shivam",age : 22},
    {name : "vishwa",age : 22}
]

function fetchSudents(){
    setTimeout(()=>{
        console.log(students);
    },1000);
}

function enrollStudents(student){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Student is getting enrolled ...");
            students.push(student);
            console.log("Student is enrolled ...");
            resolve();
        },5000);
    });
}
const promise = enrollStudents({name : "rahul",age : 22});
console.log(promise);
promise.then(fetchSudents);
//here student is enrolled first than after student's list is fetched.