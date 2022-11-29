const hello = 5;
function greet(hello){ //hello here is in the local scope
    hello();
    console.log("Inside the greet function");
    console.log(hello);
}

/**
 * greet --> Higher Order Function
 * hello --> callback Function
 */

/**
 * how to execute greet function ...
 */

greet(function(){
    console.log("Hello students,did you all get callback?");
});
