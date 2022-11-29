//Doubt Session
let count = 0;
(function immediate(){
    if(count == 0){
        let count = 1;
        console.log(count); //Op?
    }
    console.log(count); //Op?
})();



console.log("\nNext Example\n");
let MultiplyCurried = (a) => (b) => a*b;
let MultiplyTo2 = MultiplyCurried(2);
console.log(MultiplyTo2(3));
console.log(MultiplyTo2(4));