function Outer(){
    const msg = "Hello Students";
    function inner(){
        console.log(msg);
    }
    return inner;
}
const op = Outer();
op();