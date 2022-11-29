//Doubt Session
/**
 * Question 1 : Rotate the matrix by 180deg
 */

let input = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

let n = input.length;
let m = input[0].length;
for(let i = 0 ; i < parseInt((n+1)/2) ; i++){
    let k = m;
    if(n%2 == 1 && i == (n+1)/2-1){
        k = parseInt(m/2);
    }
    for(let j = 0 ; j < k ; j++){
        [input[i][j],input[n-1-i][m-1-j]] = [input[n-1-i][m-1-j],input[i][j]];
    }
}
console.log(input);

/**
 * Question 2 : Add two matrices
 */

let input1 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let input2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
let n1 = input1.length;
let m1 = input1[0].length;
let n2 = input2.length;
let m2 = input2[0].length;
if(n1 != n2 || m1 != m2){
    console.log("Matrices are not of same size");
}else{
    let output = [...Array(n1)].map(e=>Array(m1).fill(0));
    for(let i = 0 ; i < n1 ; i++){
        for(let j = 0 ; j < m1 ; j++){
            output[i][j] = input1[i][j] + input2[i][j];
        }
    }
    console.log(output);
}
