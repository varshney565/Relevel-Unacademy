var a = 5;
function go(){
    console.log(a); // let will throw the error because in that case it will be a dead temporar zone and we can't access the variables before it is declared in case of let.
    //as we are declaring a again it will comde conder local scope so that's why a is printed as undefined because a is not defined till that point but declared due to hoisting.
    var a = 15;
    console.log(a);
}
go();
console.log(a);
