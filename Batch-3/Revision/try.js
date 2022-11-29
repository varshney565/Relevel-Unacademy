function person(){
    this.name = "shivam",
    this.age;
}

const p2 = new person();
console.log(p2);

/***---------class thing-------***/

class Person{
    name;
    #age;
    constructor(name,age){
        this.name = name;
        this.#age = age;
        this.temp;
    }

    get Age(){
        return this.#age;
    }
}
const p1 = new Person("shivam",22);
console.log(p1);
console.log(p1.Age);