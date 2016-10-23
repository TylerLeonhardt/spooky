import express = require('express');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8888);

app.use('/', express.static('static'));

io.on('connection', (socket : any) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', (data : any) => {
    console.log(data);
  });
});