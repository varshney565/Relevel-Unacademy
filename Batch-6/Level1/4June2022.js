//JSON objects
//javascripot object to json object
const obj = {
    name : "shivam",
    age : 22,
    collage : "UIET"
}

const JsonData = JSON.stringify(obj);
console.log(JsonData);
//json object to javascript object
const json = '[{"name" : "Shivam","age" : 22},{"name" : "varshney","age" : 23}]'
const data = JSON.parse(json);
console.log(data);



//cool points...
const Obj = {
    name : "shivam",
    roll_no : 62,
    firends : ["Rahul","Molika","Arko bro"],
    func : function(){ //automatically ignored while converting it to json object as js is smart enough to handle those cases
        console.log("Eat,Sleep,Code,Repeat");
    },

    address : {
        city : "hatheas",
        SecondCIty : "Kurukshetra"
    }
}

const dat = JSON.stringify(Obj);
console.log(dat);

//Good Examples
function parent(){
    var hoisted = "Returning My Name";
    function hoisted(){
        return "Hello My name is shivam Vatshney";
    }
    // return hoisted();   Error
    return hoisted;//No error,hosting comes into picture as all the variable and functions definations will be there at the top and when we reaches line hoisted = "Returning my name";it will override the function defination so hoisted is a simple variable not a function.
}
console.log(parent());




//another example
//1
function foo(){
    function bar(){
        return 3;
    }
    return bar();
    function bar(){
        return 8;
    }
}
console.log(foo());
//2
function fooo(){
    var bar = function(){
        return 3;
    }
    return bar();
    var bar = function(){
        return 8;
    }
}
console.log(fooo());