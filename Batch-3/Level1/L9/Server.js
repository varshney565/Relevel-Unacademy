const http = require("http");

const listener = function(req,res){
    res.writeHead(200);
    console.log(req.url);
    switch(req.url){
        case "/name":
            res.end("Http Server Response : Tushar Raina");
            break;
        case "/company":
            res.end("Http Server Response : A reputated MNC");
            break;
        default:
            res.end("Http Server Response : Incorrect endpoint!");
    }
    console.log("server processing request...");
}

const Server = http.createServer(listener);
Server.listen(8080);