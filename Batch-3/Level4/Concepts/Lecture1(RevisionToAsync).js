

/**
 *  
 * flow for setTimeOut()
 * 
 * callstack ---> web api's ----> callback-queue ---> callstack(upon seeeing callstack as empty)
 * 
**/


function greet(){
    console.log("inside the greet");

    setTimeout(()=>{
        console.log("after waiting for atleast 5 seconds");
    },5000)

    console.log("before exiting the freet function");
}

greet();



