/**
 * Testing callback
 */
test("Testing callbacks",(done)=>{
    function callback(data){
        try{
            expect(data).toBe("Shivam");
            done();
        }catch(err){
            done(err);
        }
    }
    fetchData(callback);
});

function fetchData(callback){
    setTimeout(()=>{
        callback("Shivam");
    },3000);
}

/**
 * Testing Promise
 */

function PromiseFunc(){
    return new Promise(function(resolve,reject){
        resolve("Shivam");
    });
}

test("testing Promises",()=>{
    PromiseFunc().then((msg)=>{
        expect(msg).toBe("Shivam");
    })
})