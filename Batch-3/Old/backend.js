//INTRODUCTION TO NODE.JS DATE 21 JAN 2022


// const name = "Shivam Varshney";
// console.log(`hello my name is ${name}`);














// const fs = require('fs');
// console.log(fs);




// //Async Nature
// console.log("Before calling");

// const PathOfTheFile = "L:";
// fs.readdir(PathOfTheFile,(err,files)=>{
// 	console.log(files);
// 	files.forEach(file=>{
// 		console.log(file);
// 	});
// });

// console.log("After calling");



// const fileData = require("./modulevishwa");
// console.log(fileData);



// const http = require("http");
// const SimpleServer = http.createServer((req,res)=>{
// 	console.log("Server Started Processing Request");
// 	res.setHeader("Content-Type","application/json");
// 	res.writeHead(200);
// 	res.end(`{"message" : "Hello From The Server"}`);
// })

// SimpleServer.listen(8088);


// a = 2;
// b = 8;
// c = 8;

// function check(a,b,c){
// 	if(b*b-4*a*c < 0){
// 		console.log("NO ROOT");
// 		return -1;
// 	}
// 	var d = b*b-4*a*c;
// 	if(d == 0){
// 		console.log("ROOT IS : "+(-1*b/2*a));
// 	}else{
// 		console.log("First Root : "+((-1*b+d)/2*a));

// 		console.log("Second Root : "+((-1*b-d)/2*a));
// 	}
// }

// check(a,b,c);



var n = 5;
var pattern = "";

for(row=1;row<=n;row++){
  for(star=1;star<=row;star++){
    pattern = pattern +"* ";
  }
  pattern = pattern + "\n"
}
  for(row=n-1;row>0;row--){
    for(star = 1;star<=row;star++){
        pattern = pattern +"* "
  }
    pattern = pattern + "\n"
}
console.log(pattern)