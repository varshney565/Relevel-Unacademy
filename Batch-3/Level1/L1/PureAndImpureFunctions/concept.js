//Pure Function
console.log("Pure Function : ");
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));
console.log(sum(1,2));
console.log(sum(1,2));


//Impure Function
console.log("Impure Function : ");
function sum_impure(a,b){
    return a+b+Math.random();
}
console.log(sum_impure(5,6));
console.log(sum_impure(5,6));
console.log(sum_impure(5,6));