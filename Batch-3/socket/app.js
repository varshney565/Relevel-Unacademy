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
let clientCount = 0;
io.on('connection',(socket)=>{
    console.log("one client connected");
    clientCount++;
    /**
     * all the users that are in the system will be notified , including the new guy also
     */
    io.sockets.emit('broadcast',{
        description : "client connected = "+clientCount
    })

    //when the client is closed
    socket.on('disconnect',()=>{
        console.log("one client disconnected.")
        clientCount--;
        io.sockets.emit('broadcast',{
            description : "client connected = "+clientCount
        })
    });
}); 

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname , "./index.html"));
})

server.listen(8080,()=>{
    console.log("server started running !!");
})