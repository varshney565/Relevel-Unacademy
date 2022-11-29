//Composability
//Process of combining multiple functions to implement a complecated one
console.log("Composability\n\n");
let add = (a,b)=>a+b;
let mul = (a,b)=>(a*b);
//now calculate 2+3*4+5
const ans = add(add(2,mul(3,4)),5);
console.log(ans);




//Testing
let mult = (a,b,c)=>{
    return ()=>{
        return a*b*c;
    }
}
const op = mult(1,2,3);
console.log(op);
console.log(op());






//Currying
//breaking the function with multiple arguments into multiple functions with single argument.
console.log("\n\nCURRYING\n\n");
let mullti = (a,b,c)=>{
    return a*b*c;
}

const Mul = (x)=>{
    console.log("Inside x");
    return (y)=>{
        console.log("Inside y");
        return (z)=>{
            console.log("Inside z");
            return x*y*z;
        }
    }
}

console.log(Mul(1)(2)(3));


//Anonymous Function
//function without any name or identifiew to refer it.



//IIFE ==> Imediately invoked functional functions
(function (name){
    console.log("Hello",name);
}("Shivam"));

//or


(function (name){
    console.log("Hello",name);
})("Shivam");