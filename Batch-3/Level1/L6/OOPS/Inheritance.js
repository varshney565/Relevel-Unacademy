class Animal{
    static Name = "Papa";
    Place = "Zoo";
    eat(){
        console.log("Animal can eat");
    }
}

/**
 * extends keyword is used to achieve the parent child relationship ...
 */

class Dog extends Animal{

}

/**
 * both static and non static fields will be inherited from parent to child.
 */


const dog = new Dog();
dog.eat();
//static field
console.log(Dog.Name);
//non static field
console.log(dog.Place);