/**
 * var Name = "Vishwa"; //GLobal Variable 
 * function fun(){
 *  console.log(Name);
 *  Name = "shivam";
 * }
 * fun();
 * console.log(Name);
*/


var Name = "Vishwa";
function fun(){
    console.log(Name);
    var Name = "Shivam";   //Local Variable
    console.log(Name);
}
fun();
console.log(Name);
