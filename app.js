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
	everyone.now.move_client_piece(name, position);
}


// var primaryKey = 0;
// everyone.connected(
//     function(){
//         // this.now.uuid = ++primaryKey;
//     }
// );
// everyone.now.syncPosition = function( position ){
//   // everyone.now.filterUpdateBroadcast( this.now.uuid, position );
//   everyone.now.filterUpdateBroadcast( this.now.uuid, position );
// };
// everyone.now.filterUpdateBroadcast = function( masterUUID, position ){
//     if (this.now.uuid == masterUUID){
//         return;
//     }
//     everyone.now.updatePosition( position );
// };
