/**
 * Normal Execution ...
 */

// console.log("start of the execution...");
// function vishwa(){
//     console.log("Inside the Vishwa function");
//     return "data";
// }
// console.log("Before calling the function Vishwa");
// variable = vishwa();
// console.log("After calling the function Vishwa");
// console.log(variable);
// console.log("End of the execution ...");




/**
 * Adding Async ...
 */



console.log("start of the execution...");
async function vishwa(){
    console.log("Inside the Vishwa function");
    /**
     * We can write our own custiom promise object and return 
     */

    /**
     * I am doing some operation which can take time - external API call | DB call
     * 
     * Keep waiting here till response come.
     * 
     * await is a keyword , that we use , to wait for any processing.
     */
    const response1 = await new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve();
        },2000);
    });
    
    console.log("Wait Finished");
    return response1;
}
console.log("Before calling the function Vishwa");
variable = vishwa();
console.log("After calling the function Vishwa");
console.log(variable);
console.log("End of the execution ...");
