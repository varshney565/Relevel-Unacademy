const promise = new Promise(function(resolve,reject){
    err = false;
    if(!err){
        resolve("Promise is fullfilled successfully");
    }else{
        reject("Promise is broken");
    }
});

function PromiseFullFilled(msg){
    console.log(msg);
}

function PromiseBroken(msg){
    console.log(msg);
}

promise.then(PromiseFullFilled).catch(PromiseBroken);