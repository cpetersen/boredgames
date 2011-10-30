var express = require('express'); 
var app = express.createServer(); 
var nowjs = require("now");
var everyone = nowjs.initialize(app);

app.listen(8080);

app.configure('development', function(){
    app.use(express.static(__dirname + '/public'));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
});

everyone.now.move_server_piece = function(name, position) {
	// everyone.now.move_client_piece(name, position);
	nowjs.getGroup(this.now.room).now.move_client_piece(name, position);
}

everyone.now.changeRoom = function(newRoom) {
  nowjs.getGroup(this.now.room).removeUser(this.user.clientId);
  nowjs.getGroup(newRoom).addUser(this.user.clientId);
  this.now.room = newRoom;
}

nowjs.on('connect', function() {
  this.now.start();
});
