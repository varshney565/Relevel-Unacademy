const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("Here is the node.js server");
    res.setHeader('content-type','text/html'); //default
    res.write('<html>')
    res.write('<head><title>Relevel</title></head>');
    res.write("<body><h1>Hello From shivam's server</h1></body>");
    res.write('</html>')
    res.end();
});
server.listen(3000,()=>{
    console.log("Listining to port 3000");
});

