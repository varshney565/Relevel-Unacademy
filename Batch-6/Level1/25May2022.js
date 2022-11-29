/**
 * Problem : 1
 * return true if reversing any subarray of given array make the whole array sorted
 * else return false
 */

const input = [1,2,2,6,5,4,8,7];
let n = input.length;
let i = 0;
for(i = 0 ; i < n ; i++){
    if(i == 0 || input[i] >= input[i-1]){
        continue;
    }else{
        break;
    } 
}
let start = i-1;
while(i < n && input[i] <= input[i-1]){
    i++;
}
let end = i-1;
ok = true;
while(i < n){
    if(input[i] < input[i-1]){
        ok = false;
        break;
    }
    i++;
}
console.log(start,":",end);
let val1 = input[start];                    //d
let val2 = input[end];                      //j
let val3 = (start>=1?input[start-1]:-1e9);  //c
let val4 = (end<=n-2?input[end+1]:1e9);     //k
if(val3 <= val2 && val1 <= val4 && ok){
    console.log("YES");
}else{
    console.log("NO");
}


//Break and continue
//Problem 2:
//Pattern 1
/**
 * 
                *
                **
                ***
                ****
                *****

                let num = 5;
                let result = "";
                for(let i = 0 ; i < num ; i++){
                    for(let j = 0 ; j < num ; j++){
                        if(j <= i){
                            result += "*";
                        }
                    }
                    result += "\n";
                }
                console.log(result);
 */



//Problem 3:
//Pattern 2

/**
 *              *
                * *       
                * * *     
                * * * *   
                * * * * * 
                * * * *   
                * * *
                * *
                *
                let num = 5;
                let result = "";
                for(let i = 0 ; i < num ; i++){
                    for(let j = 0 ; j < num ; j++){
                        if(j <= i){
                            result += "* ";
                        }else{
                            break;
                        }
                    }
                    result += "\n";
                }
                for(let i = num-2 ; i >= 0 ; i--){
                    for(let j = 0 ; j < num; j++){
                        if(j <= i){
                            result += "* ";
                        }else{
                            break;
                        }
                    }
                    result += "\n";
                }  
                console.log(result);
 */

//Problem 4:
//Pattern 3
/**
 * 
 *                      *
 *                     * *
 *                    * * * 
 *                   * * * *
 *                  * * * * * 
 *                 * * * * * *
   
                    let num = 5;
                    let result = "";
                    for(let i = 0 ; i < num ; i++){
                        for(let j = 0 ; j <= 2*num-2 ; j++){
                            if(j >= num-1-i && j <= num-1+i){
                                if((i+j)%2 == 0)
                                    result += "*";
                                else
                                    result += " ";
                            }else if(j > num-1+i){
                                break;
                            }else{
                                result += " ";
                            }
                        }
                        result += "\n";
                    }
                    console.log(result);
 */        


//Problem 5:
//Pattern 4
/**
 *                      *
 *                     * *
 *                    * * * 
 *                   * * * *
 *                  * * * * * 
 *                 * * * * * *
 *                  * * * * *
 *                   * * * *
 *                    * * *
 *                     * *
 *                      *
 * 
                let num = 10;
                let result = "";
                for(let i = 0 ; i < num ; i++){
                    for(let j = 0 ; j <= 2*num-2 ; j++){
                        if(j >= num-1-i && j <= num-1+i){
                            if((i+j)%2 == 0)
                                result += "*";
                            else
                                result += " ";
                        }else if(j > num-1+i){
                            break;
                        }else{
                            result += " ";
                        }
                    }
                    result += "\n";
                }
                for(let i = num-2 ; i >= 0 ; i--){
                    for(let j = 0 ; j <= 2*num-2 ; j++){
                        if(j >= num-1-i && j  <= num-1+i){
                            if((i+j)%2 == 0){
                                result += "*";
                            }else{
                                result += " ";
                            }
                        }else{
                            result += " ";
                        }
                    }
                    result += "\n";
                }
                console.log(result);
 */


/**
 * Problem 6
 * Return Sum of digits of the given Number
 * e.g : 15201
 * return 1+5+2+0+1 = 9
 */

function sum(num){
    if(num == 0)
        return 0;
    return num%10+sum(parseInt(num/10));
}

console.log(sum(15201));


/**
 * Problem 7:
 * Fetch even elements in the new array
 */
const trap = [32,50,4,1,2,80];
const res = trap.filter((ele)=>{
    return ele%2==0;
})
console.log(res);


/**
 * Problem : 8
 * Patttern : 5
 * 
 * 
 *      1 2 3 4 5 6 7
 *       2 3 4 5 6 7
 *        3 4 5 6 7
 *         4 5 6 7
 *          5 6 7
 *           6 7
 *            7
 *           6 7
 *          5 6 7
 *         4 5 6 7
 *        3 4 5 6 7
 *       2 3 4 5 6 7
 *      1 2 3 4 5 6 7
 */

let num = 7;
let result = "";
for(let i = 1 ; i <= num ; i++){
    for(let j = 1 ; j <= num ; j++){
        if(j >= i && j <= num){
            result += j.toString();
            result += " ";
        }else{
            result += " ";
        }
    }
    result += "\n";
}
for(let i = num-1 ; i >= 1 ; i--){
    for(let j = 1 ; j <= num ; j++){
        if(j >= i && j <= num){
            result += j.toString()+" ";
        }else{
            result += " ";
        }
    }
    result += "\n";
}
console.log(result);