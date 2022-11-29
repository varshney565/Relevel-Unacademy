/**
 * 1. Enroll a student.
 * 2. Fetch the list of all the enrolled students.
 */

/**
 * Data Structure whcih will be used to store the students enrolled.
 */
const students = [
    {name : "Vishwa",age : 99},
    {name : "Shivani",age : 98}
]

/**
 * Function to fetch all the students ...
 */
function fetchStudents(){
    setTimeout(()=>{
        console.log(students);
    },1000)
}


//enrollStudent function ...
function enrollStudents(student,fetchstudents){
    setTimeout(function(){
        console.log("Student is getting enrolled ...");
        students.push(student)
        console.log("Student is enrolled ....");
        //1. works perfectly fine but it is a callback hell
        //fetchSudents();
    },5000);
    //2. in this case fetchstudents got eveluated first but we don't want that.what we want ???
         // we want first the student to be enrolled and than fetch the list of all the enrolled students
    fetchStudents(); 
}

enrollStudents({name : "shivam",age : 22},fetchSudents);