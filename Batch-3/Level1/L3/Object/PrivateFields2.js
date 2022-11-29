class Human{
    #age = 22;
    getAge(){
        return this.#age;
    }
}

const human = new Human();
console.log(human.getAge());