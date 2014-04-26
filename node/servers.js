var servers = []


var express = require('express'),http = require('http'), server = http.createServer(express), io = require('socket.io').listen(server), fs = require('fs'), childProcess = require('child_process'), sleep = require('sleep');
server.listen(8003);
var app = express();
io.set('log level', 1);
var forkedList;

app.get('/hey', function(req, res) {
    res.send('hello world');
})

io.sockets.on('connection', function(socket) {

if (!forkedList) {
    forkedList = [];
    forked = childProcess.fork('./static/worker');

    forked.on('exit', function(code) {
        console.log("Program finished with code " + code);
    });

//    forked.sent('wso2as');

    forked.on('message', function(message) {
        console.log('message~~~~ ' + message);
        io.sockets.emit('update', message);
    });
 
    forkedList.push(forked);
}
    socket.on('disconnect', function() {
       console.log('~~~~disconnected~~~~')
    });
    console.log('connected!!!');
})
