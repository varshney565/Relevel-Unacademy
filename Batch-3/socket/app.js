const express = require('express');
const app = express();
const path = require('path');
/**
 * we need http server
 */
const server = require('http').Server(app);
/**
 * socket server is also needed on both client and server side.
 */
const socket = require('socket.io');
const io = new socket.Server(server);

/**
 * when client is trying to connect to the server.
 */

io.on('connection',(socket)=>{
    console.log("one client connected.");


    /**
     * send some message to the client after 5 seconds of connection
     */
    setTimeout(()=>{
        // socket.send("Hello from server after 5 seconds !!");
        socket.emit('testingEvent',{
            description : "this is a custom event message !"
        })
    },5000)

    //when the client is closed
    socket.on('disconnect',()=>{
        console.log("one client disconnected.")
    });
}); 

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname , "./index.html"));
})

server.listen(8080,()=>{
    console.log("server started running !!");
})