//print the array elements in the sequential order.
function fun(arr,n){
    if(n == 0) return;
    fun(arr,n-1);
    console.log(arr[n-1]);
}
const arr = [1,2,3];
fun(arr,3);

//find the factorial 
function fact(n){
    if(n <= 1) return 1;
    return n*fact(n-1);
}
console.log(fact(5));