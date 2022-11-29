class Circle{
    /**
     * 2 Type of Fields...
     */
    static shape = "Circle";
    cal = 5;

    /**
     *  Constructors
     */

    constructor(radius){
        this.radius = radius;
    }

    /**
     * Methods
     */

    static circumference(radius){
        return 2*3.14*radius;
    }

    area(){
        return 3.14*this.radius*this.radius;
    }
}

const obj = new Circle(5);
console.log(obj);
console.log(Circle.shape);