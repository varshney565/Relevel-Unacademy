/**
 * Creating the Node.js Server.
 * 
 * http module needed for that.
 */

const http = require("http");

/**
 * Create THe server.
 */
console.log("Before");
const simpleServer = http.createServer((req,res)=>{
    //req ---> request
    //res ---> response
    console.log(req.url);
    console.log("server started processing request.");
    res.setHeader("content-type","application/json");
    res.writeHead(200);
    res.end(`{"name" : "shivam varshney"}`);
});
console.log("After");



simpleServer.listen(8080);