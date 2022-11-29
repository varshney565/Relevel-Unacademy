/**
 * create an api : 
 * 2s. which fetch all the student roll no
 * 2s. fetch a student with roll no 2(name,age)
 * 2s. 2s gender
 * */


const getStudents = ()=>{
    setTimeout(function(){
        const rollNo = [1,2,3,4,5,6,7];
        console.log(rollNo);
        setTimeout(function(){
            const person = {
                name : "shivam",
                age : 22
            }
            console.log(`My name is ${person.name} and My age is ${person.age} and roll No is ${rollNo[1]}.`);
            setTimeout(function(){
                console.log("Gender is Male.");
            },2000);
        },2000);
    },2000);
}
getStudents();