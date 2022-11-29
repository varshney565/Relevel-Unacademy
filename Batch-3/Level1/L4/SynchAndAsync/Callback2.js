function outer(){
    return function(){
        console.log("This is the function returned");
    }
}

const innerFunc = outer();
innerFunc();

/**
 * 1. first GEC and call stack created.
 * 2. Allocate Memory for functions.
 * 3. LEC(calling to some function).
 */

