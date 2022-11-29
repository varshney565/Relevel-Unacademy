function Cricketer(name,age){
    this.name = name;
    this.age = age;
}


const Virat = new Cricketer("Virat",33);
const Sky = new Cricketer("Sky",29);
const Rohit = new Cricketer("Rohit",35);
const Dhoni = new Cricketer("Dhoni",39);
Cricketer.prototype.team = "India";

console.log(Virat);
console.log(Sky);
console.log(Rohit);
console.log(Dhoni);
Virat.__proto__.country = "India";
console.log(Virat.__proto__);
console.log(Cricketer.__proto__.__proto__);
console.log(Cricketer.prototype);