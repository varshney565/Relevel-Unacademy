console.log(parseInt("123Hello"));
var t = console.log(parseInt("123Hello"));
console.log(t);
console.log(undefined > 123);

//for of will only work on iterable objects like array and string not like objects

//IIFE

(function(){
    console.log("Immediately Invoked function expression");
})();

/**
 * Problem 1:
 * Given an array and find the minimum and maximum of that array
 */

const arr = [1,2,31,3,1,6];
n = arr.length;
min = 1e9;
max = -1e9;

for(let i = 0 ; i < n ; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}
console.log(max,min);
/**
 * Never use var before variable,use let or const 
 * Not preffered in industry
 */


/**
 * Problem : 2
 * Given the price of stocks for n days,return the max profit
 */

const price = [100,180,260,310,40,535,695];
n = price.length;
ans = 0;
for(let i = 1 ; i < n ; i++){
    if(price[i] > price[i-1]){
        ans += price[i]-price[i-1];
    }
}
console.log(ans);


/**
 * Problem : 3
 * sort the array of 0's and 1's
 */

const input = [0,0,1,1,1,0,0,1,1,0,0,1];
n = input.length;
//one way

/**
let j = 0;
for(let i = 0 ; i < n ; i++){
    if(input[i] == 0){
        let a = input[j];
        input[j] = input[i];
        input[i] = a;
        j++;
    }
}
console.log(input);
**/




//second way
let i = 0;
let j = n-1;
while(i < j){
    while(i < n && input[i] == 0) i++;
    while(j > -1 && input[j] == 1) j--;
    if(i < j){
        input[i] = 0;
        input[j] = 1;
        i++;
        j--;
    }
}
console.log(input);

