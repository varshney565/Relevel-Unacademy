const person = {
    name : "Shivam",
    age : 99,
    address : "Kurukshetra",
    Friends : ['a','b','c'],
    getHobbies : function(){
        console.log("Asking Hobbies is boring old question ...");
    },
    getIntro : function(){
        console.log(this.name + " is "+this.age+" years old and he lives in "+this.address+".");
    }
}

console.log(person.getIntro());
//this.name,this.age,this.address doest't have the link to person object.
const func = person.getIntro;
func();

const func2 = person.getIntro.bind(person); //getIntro function should always be binded to person...
func2();