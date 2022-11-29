class Human{
    age = 99;//available outside the class
    #maritalstatus = "Single";
}

const human = new Human();
console.log(human.age);
console.log(human.maritalstatus); //undefined
//both static and non static fields can be made private

//How someone can change those private fields??? ---> Encapsulation