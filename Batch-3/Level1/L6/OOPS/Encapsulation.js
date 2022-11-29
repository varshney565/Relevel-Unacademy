class Person{
    //first those provate fields needed to be declared ...
    #name;
    #age;

    constructor(name,age){
        this.#name = name;
        this.#age = age;
    }


    //use get for getting the properties as a variable ...
    get getAge(){
        return this.#age;
    }

    get getName(){
        return this.#name;
    }

    set setAge(age){
        this.#age = age;
    }

    set setName(name){
        this.#name = name;
    }
};


const obj = new Person("shivam",22);
console.log(obj.getAge);
console.log(obj.getName);
obj.setName = "shivam varshney";
console.log(obj.getName);