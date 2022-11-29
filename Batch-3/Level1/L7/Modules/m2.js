//User Defined Modules / Local Modules

const car = {
    brand : "ford",
    model : "Fiesta"
}

/**
 * Make This available as a module to the other files.
 */

function getThename(){
    return "Vishwa Mohan";
}

const hobbies = ['Gamming','Flirting','Killing the time'];

// module.exports = {
//     car : car,
//     getThename : getThename,
//     hobbies : hobbies
// };

//or 

//Another way to achieve the same thing ...
exports.car = car;
exports.getThename = getThename;
exports.hobbies = hobbies;
exports.add = (a,b)=>a+b; //defining and exporting at the same time.