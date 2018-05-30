var http=require('http');
var server=http.createServer();

server.on('request',function(request, response){
	console.log('request event');
	
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Event handling! \n');
});

server.on('connection', function(){
	console.log('Connection event');
});

server.listen(8124, function(){
	console.log('Listening event!');
});

console.log('Server running on port 8124');
