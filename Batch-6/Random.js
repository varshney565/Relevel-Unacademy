const person = {
    fname : "shivam",
    sname : "varshney",
    age : 22,
    collage : "uiet",
    friends : ["rahul","arka","hritik","m"]
};
console.log(person);

// let {SecondryName:Name = "Krishna"} = person;
// console.log(Name);

let SecondryName;
({fname:SecondryName} = person);
console.log(SecondryName);

//accessing all friends
let {friends:[f,s,t]} = person;
console.log(f,s,t);

//wrong for of won't work on non iterable objects

// for(var val of person){
//     console.log(person);
// }

 //Q1
 const car = {
 color: 'Black',
 speed: '120Kmph',
 brand: 'Audi',
 start: function () {
 console.log('Car started');
 },
 stop: function () {
 console.log('Car stopped');
 },
}
const newCar = car;
newCar.brand = 'BMW';
console.log(car.brand);
//Q2