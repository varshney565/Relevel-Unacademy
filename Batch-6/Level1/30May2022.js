//Question 1 : Given a matrix,tell whether it is diagonal or not

let input = [
    [1,0,0,0],
    [0,2,0,0],
    [0,0,3,0],
    [0,0,0,4]
]

let n = input.length;
let m = input[0].length;
let ans = true;
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        if(i != j && input[i][j]){
            ans = false;
            break;
        }
    }
    if(!ans) break;
}
if(ans){
    console.log("matrix is diagonal");
}else{
    console.log("matrix is not diagonal");
}

/**
 * Question 2 : Given a matrix ,tell the sum of the each column of the matrix
 * in = [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ]
 * 
 * op = [12,15,18]
 */

input = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
n = input.length;
m = input[0].length;
ans = [...Array(m)].fill(0);
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < m ; j++){
        ans[j] += input[i][j];
    }
}
console.log(ans);

/**
 * Question 3 : Find Sum of upper triangle and lower triangle of the matrix
 */

 input = [
    [2,15,4],
    [1,2,15],
    [2,10,7]
]
n = input.length;
m = input[0].length;

let lowT = 0,upT = 0;
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        if(i >= j){
            lowT += input[i][j];
        }
        if(i <= j){
            upT  += input[i][j];
        }
    }
}
console.log("LOWER TRIANGLE SUM : ",lowT);
console.log("UPPER TRIANGLE SUM : ",upT);

/**
 * Question 4 : Given a 2D matrix in sorted order where last element of ith row is smaller than the first element
 * of (i+1)th row and each row is also sorted
 */


 function SearchEle(matrix,n,m,target){
    let start = 0;
    console.log(matrix);
    let end = n-1;
    let rowNo = -1;
    while(start <= end){
        let mid = parseInt((start+end)/2);
        if(matrix[mid][0] < target){
            if(target > matrix[mid][m-1]){
                start = mid+1;
            }else{
                rowNo = mid;
                break;
            }
        }else if(matrix[mid][0] > target){
            end = mid-1;
        }else{
            return true;
        }
    }
    if(rowNo == -1) return false;
    start = 0;
    end = m-1;
    while(start <= end){
        let mid = parseInt((start+end)/2);
        if(target > matrix[rowNo][mid]){
            start = mid+1;
        }else if(target < matrix[rowNo][mid]){
            end = mid-1;
        }else{
            return true;
        }
    }
    return false;
}

input = [
    [1,3,5,7],
    [10,11,16,20],
    [23,30,34,50],
]
n = input.length;
m = input[0].length;
console.log(SearchEle(input,n,m,5));

/**
 * Question 5 : Search an element in row-wise and column-wise sorted matrix
 */

input = [
    [2,4,15,16],
    [7,18,20,22],
    [8,21,23,24],
    [10,26,27,28]
]
n = input.length;
m = input[0].length;
let s = 0;
let e = m-1;
let target = 10;
ok = false;
while(s >= 0 && s < n && e >= 0 && e < m){
    if(target < input[s][e]){
        e--;
    }else if(target > input[s][e]){
        s++;
    }else{
        ok = true;
        break;
    }
}
if(ok){
    console.log("YES,Element is present");
}else{
    console.log("NO,element is not present");
}

