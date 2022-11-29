/**
 * 
 * Modules : Self Contained unit of related functionalities ...
 */

 const fs = require('fs');
 // console.log(fs);
 const pathOfTheFile = "C:/Users/Shivam/Desktop/DailyCodeForces";
 fs.readdir(pathOfTheFile,(err,files)=>{ //Async Way of readng file ...
     console.log(err);
     files.forEach(file=>{
         console.log(file);
     })
 });
 
 //readdir accepting a callback so that's wh End Of The Line printed first.
 console.log("End Of The Line");