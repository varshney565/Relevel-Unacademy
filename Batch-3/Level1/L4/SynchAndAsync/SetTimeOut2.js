console.log("Hello STudents");
function callback(){
    console.log("Are You getting the hold of callback ???");
}

setTimeout(callback,2000);
console.log("I am the last line ,but will not be executed last... if you know,you know Async");