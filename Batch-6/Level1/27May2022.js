//SPECIAL CLASS OF ARRAY


/**
 * Q1 : Sparse Array 
 * Given a 2D array return true if it is sparse or not
 */
console.log("Problem : 1\n");

const input = [[0,1,2],
               [5,0,6],
               [1,0,0]];

let n = input.length;
let m = input[0].length;
let nZ = 0,nO = 0;
for(let i = 0 ; i < n ; i++){
    for(let j = 0 ; j < n ; j++){
        if(input[i][j] == 0) nZ++;
        else nO++;
    }
}

if(nZ > parseInt((nO+nZ)/2)) console.log("Matrix is sparse");
else console.log("Matrix is not sparse");

console.log("Problem : 2\n");
/**
 * Q2 : Given an array of elements of 0,1,2
 * make the entire array such that o comes first than 2 and at last 1 will come
 */

const input2 = [1,0,0,2,1,1,2,1,0,2,2];
let n2 = input2.length;
let i = 0;
let j = 0;
let k = 0;
//0 0 0 0 2 2 2 2 1 1 1 1 0
//        k       j       i
//0 0 0 0 0 2 2 2 2 1 1 1 1 _
//          k       j       i
while(i < n2){
    if(input2[i] == 1){
        i++;
        continue;
    }else if(input2[i] == 0){
        input2[i] = input2[j];
        input2[j] = input2[k];
        input2[k] = 0;
        i++;
        j++;
        k++;
    }else if(input2[i] == 2){
        let a = input2[i];
        input2[i] = input2[j];
        input2[j] = a;
        i++;
        j++;
    }
}
console.log(input2);

/**
 * Q3 : GIven an array of elements partition the array such that all the
 * elements that are neagitive should come on left hand side and all
 * the elements that are positive should come on right hand side
 */
console.log("Problem : 3\n");

const input3 = [-3,4,5,-2,-5,-9,8,10];
let n3 = input3.length;
let j3 = 0;
for(let i = 0 ; i < n3 ; i++){
    if(input3[i] < 0){
        let a = input3[j3];
        input3[j3] = input3[i];
        input3[i] = a;
        j3++;
    }
}
console.log(input3);


console.log("Tasks : \n");
//S
let arr = [1,2,3,4];
//T1
[a,b,c,d,e] = arr;
console.log(a,b,c,d,e);
//T2
let {3:nn} = arr;
console.log(nn);
//T3
[arr[0],arr[1]] = [arr[1],arr[0]];
console.log(arr);
//E

/**
 * Q4 : rotate the array by one cycle
 * e.g arr = [1,2,3,4]
 * after one rotation
 *     arr = [4,1,2,3];
 */
console.log("Problem : 4\n");

const input4 = [1,2,3,4];
console.log(input4);
let t = input4.pop();
input4.unshift(t);
console.log(input4);


/**
 * Q5 : Longest Consicutive Sequence
 */

 console.log("Problem : 5\n");
 const input5 = [4,1,7,2,3,8];
 let n5 = input5.length;
 //One Approach can be to sort the array and then find the longest consicutive sequence
 input5.sort();
 let ans = 0;
 let temp = 1;
 for(let i = 1 ; i < n5 ; i++){
    if(input5[i] == input5[i-1]+1) temp++;
    else if(input5[i] == input5[i-1]){
        continue;
    }else{
        if(temp > ans) ans = temp;
        temp = 1;
    }
 }
 console.log(ans);