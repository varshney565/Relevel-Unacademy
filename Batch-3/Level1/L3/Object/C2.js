//CLass


//with default constructor
class Teacher{
    //default constructor is always there
}
const obj = new Teacher();
console.log(obj);


//with created constructor
class Teacher2{
    constructor(name){
        this.name = name;
    }
}
const obj2 = new Teacher2("Vishwa Mohan");
console.log(obj2);