function OuterFunc(){
    const name = "Vishwa";
    function innerFunc(){
        const age = 16;
        console.log(name + " age is "+age);
    }
    innerFunc();
}
OuterFunc();