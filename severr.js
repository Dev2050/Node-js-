var http=require('http');

function onRequest(request, response){
	console.log('User made a request from: '+request.url);
	response.writeHead(200,{"Context-Type": "text/plain"});
	response.write("Response data!");
	response.end();
}

http.createServer(onRequest).listen(8000);
console.log("server is now running...");