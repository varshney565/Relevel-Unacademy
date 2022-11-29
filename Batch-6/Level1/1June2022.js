//Pass by value
function square(x){
    // x = x*x;
    x++;
    return x;
}

let y = 10;
let result = square(y);
console.log(result);
console.log(y);


//Pass by Reference
function increaseAge(obj){
    obj.age += 1;
}

let person = {
    name : "shivam",
    age : 22
}

increaseAge(person);
console.log(person);

//Example 1
// function increaseAge(obj){
//     obj.age += 1;
//     obj = {
//         name : "kunal",
//         age : 32
//     }
//     console.log(obj);
// }

// person = {
//     name : "shivam",
//     age : 22
// }

// increaseAge(person);
// console.log(person);

//Example 2

// function increaseAge(obj){
//     obj = {
//         name : "kunal",
//         age : 32
//     }
//     obj.age += 1;
//     console.log(obj);
// }

// person = {
//     name : "shivam",
//     age : 22
// }

// increaseAge(person);
// console.log(person)


//Pure And Impure functions 

//Pure functions are functions that return the same output for the same input.
//Impure functions are functions that return different output for the same input.
function add(x,y){
    return x+y;
}
console.log(add(2,2));








function add1(x,y){
    let rand = Math.random()*10;
    //Math.random() gives a random number between 0 and 1 (not including 1)
    //Math.random()*10 gives a random number between 0 and 10 (not including 10)
    return x+y+rand;
}
console.log(add1(2,2));







//Known as silent error because global variable got changed in the function
//global variable should not changed in the function but should changed in the global scope
var globalVariable = 1;
function add2(x,y){
    globalVariable = 0;
    return x+y+globalVariable;
}
console.log(globalVariable);
console.log(add2(2,2));
//value of global variable will be changed
console.log(globalVariable);


console.log("Impure Function : ")
let mutateNum = 0;
const impurefunction = (num)=>{
    return (mutateNum += num);
}

console.log(impurefunction(2));
console.log(impurefunction(2));
console.log(impurefunction(2));

//CLOSURE

function greet(){
    let name = "shivam";
    function sayHi(){
        console.log("hi "+name);
    }
    sayHi();
}
greet();




function x(){
    let a = 9;
    function y(){
        console.log(a);
    }
    a = 120;
    return y;
}
var op = x();
op();






function a(){
    var a = 10;
    function b(){
        var b = 20;
        function c(){
            console.log(a,b);
        }
        c();
    }
    b();
}
a();




//Question : Given an array ,find any element in that array 
//e.g. = arr = ['a','b','c','h','c','z'];
//char to be searche = 'c'

arr = [1,28,3,4,56];
target = 258;
const res = arr.find(ele=>ele==target);
console.log(res);





console.log("Array : ");
arr = [1,2,3];
arr[100] = 20;
console.log(arr.length);
console.log(arr[23]);