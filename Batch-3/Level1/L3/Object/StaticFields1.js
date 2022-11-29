class Circle{
    diameter = 23;
    static area = 1223;
}

const cir = new Circle();
console.log(cir.diameter);
console.log(cir.area); //undefined because we can't access static fields throw objects,only accessable through class

