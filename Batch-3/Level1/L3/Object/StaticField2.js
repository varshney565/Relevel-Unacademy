class Circle{
    diameter = 23; //it belongs to object
    static area = 1223;
    radius = function(){
        return this.diameter/2;
    }

    static perimeter(){ //it belongs to class
        return 3.14*this.diameter;
    }
}


const cir = new Circle();
console.log(cir);
console.log(cir.radius());
console.log(Circle.perimeter()); //perimeter does't have the access to diameter so NaN