function Car(){
    this.name = "i20";
    this.colour = "red";
}
const carobj = new Car();
console.log(Car.prototype);
console.log(carobj.__proto__);