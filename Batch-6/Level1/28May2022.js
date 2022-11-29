//ARRAYS
let arr = [1,2,3];
console.log("ARRAYS");
console.log("FOR IN");
for(let i in arr){
    console.log(i);
}
console.log("FOR OF");
for(let i of arr){
    console.log(i);
}


//OBJECTS
console.log("OBJECTS");
const obj = {
    name : "shivam",
    age : 22,
    Friends : ["Rahul","Vishal","Hritik"],
    isPlaced : false
}

console.log("FOR IN");
for(let i in obj){
    console.log(i);
}
//for of only works on iterable objects(arrays,string,list);

// console.log("FOR OF");
// for(let i of obj){
//     console.log(i);
// }


console.log("\n\n2D ARRAY START\n\n");
const Students = [
    ["shivam",22,"student"],
    ["Molika",21,"Angry Girl"],
    ["Mountain Dew",400,"Name bante h risk se"]
]

for(let i of Students){
    console.log(i);
}


/**Question 1 : Print the array in the wave form
 * e.g.
 * input : 
 * 10 20 30 40
 * 50 60 70 80
 * 90 11 12 14
 * 
 * 
 * output : 10 50 90 11 60 20 30 70 12 14 80 40
*/



let input = [
    [10,20,30,40],
    [50,60,70,80],
    [90,11,12,14]
];
let n = input.length;
let m = input[0].length;
let result = "";
for(let j = 0 ; j < m ; j++){
    let start = 0,end = n-1,inc = 1;
    if(j%2 == 1){
        start = n-1;
        end = 0;
        inc = -1;
    }
    for(let i = start ; i != end+inc ; i += inc){
        result += input[i][j].toString()+" ";
    }
}
console.log(result);


/**
 * Question 2 : Print the transpose of a given matrix
 */
//the below logic only works for square matrix
//for a matrix of dimention n*m , n is the number of rows and m is the number of columns
//we have to create an auxiliary array of size m*n in which element at index input[i][j] will be copied to the element at index output[j][i]
//it will work for 2D matrix of size n*m
input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
n = input.length;
m = input[0].length;
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < m ; j++){
        if(i < j){
            let temp = input[i][j];
            input[i][j] = input[j][i];
            input[j][i] = temp;
        }
    }
}
console.log("Transpose of the matrix : " ,input);


//Task...
//Create a matrix of size n*m
n = 3;
m = 5;
var output = [...Array(n)].map(e => Array(m).fill(-3));//It will create an array of size n*m where all elements are filled with -3
console.log(output);

/**question 3 : Multiply two matrixes */

let A = [
    [1,2,3],
    [4,5,6]
];
let B = [
    [1,2],
    [3,4],
    [5,6]
]
let n1 = A.length;
let m1 = A[0].length;
let n2 = B.length;
let m2 = B[0].length;
if(m1 != n2){
    console.log("Matrix multiplication not possible");
}else{
    let result = [...Array(n1)].map(e=>Array(m2).fill(0));
    for(let i = 0 ; i < n1 ; i++){
        for(let j = 0 ; j < m2 ; j++){
            for(let k = 0 ; k < m1 ; k++){
                result[i][j] += A[i][k]*B[k][j];
            }
        }
    }
    console.log(result);
}


/**Question 4 : Print The matrixes in spiral form */

const mat = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
];

n = mat.length;
m = mat[0].length;
let left = 0;
let right = m-1;
let up = 0;
let down = n-1;
result = "";
while(true){
    for(let i = up ; i <= down ; i++){
        result += mat[i][left].toString();
        result += " ";
    }
    left++;

    for(let i = left ; i <= right ; i++){
        result += mat[down][i]+" ";
    }
    down--;

    if(up > down){
        break;
    }
    for(let i = down ; i >= up ; i--){
        result += mat[i][right]+" ";
    }
    right--;

    if(right < left){
        break;
    }

    for(let i = right ; i >= left ; i--){
        result += mat[up][i]+" ";
    }
    up++;
}
console.log(result);
