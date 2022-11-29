//1st way of creating the object ...
const person = {
    name : "Shivam",
    age : 22,
    gender : "Male",
    Hobbies : ["Singing","Coding"],
    dance : function(){
        console.log("Bad Choice");
    }
};
console.log(person);
console.log(person.name);
console.log(person['name']);
//2nd way of creating the object ...
const newPerson = new Object(); //it will create an empty object
newPerson.name = "shivam";
console.log(newPerson);
