//Problem Solving Session on Recursion

//Q1 : fibonacci series
let max = 12;
let arr = [...Array(max+1)].fill(-1);
function fibonacci(n) {
    if (n <= 1) {
        return arr[n] = n;
    }
    if(arr[n] !== -1) {
        return arr[n];
    }
    return arr[n] = fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(max);
console.log(arr);




//Q2 : function to check array is sorted or not
function check(arr,i){
    if(i == arr.length-1){
        return true;
    }
    let Small = check(arr,i+1);
    if(Small && arr[i] < arr[i+1]){
        return true;
    }
    return false;
}
arr = [1,2,3,4,5,6,7,8,9,12];
console.log(check(arr,0));



//Q3 : total number of binary strings that we can generate using n
//which do not contain consecutive 1s
//          0's   1's
//n = 0 ->  1     0
//n = 1 ->  1     1
//n = 2 ->  2     1
//n = 3 ->  3     2

function go(n){
    if(n == 0){
        return {0:1,1:0};
    }
    let Small = go(n-1);
    let out = {};
    out[0] = Small[0] + Small[1];
    out[1] = Small[0];
    return out;
}
let ans = go(10);
console.log(ans[0]+ans[1]);

//Q4 : print all subsequence of a given array

input = [1,2,3];
op = [];
function subsequence(arr,i,subseq){
    if(i == arr.length){
        op.push([...subseq]);
        return;
    }

    subsequence(arr,i+1,subseq);
    subseq.push(arr[i]);
    subsequence(arr,i+1,subseq);
    subseq.pop();
}

subsequence(input,0,[]);
console.log(op);