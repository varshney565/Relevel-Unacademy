//overriding
class Parent{
    eat(){
        console.log("Parent is eating");
    }
}

class Child1 extends Parent{
    eat(){
        console.log("Child1 is eating");
    }
}


class Child2 extends Parent{
    eat(){
        console.log("Child2 is eating");
    }
}

const c1 = new Child1();
c1.eat();

//overloading not supportd by js.
/**
 * 
 * There is no way that js can differentiate between eat() and eat(rice,dal)
 * 
 * 
 * class Child1 extends Parent{
        eat(){
            console.log("Child1 is eating");
        }

        eat(rice,dal){
            console.log("Child1 is eating " + rice + " " + dal);
        }
   }

*/