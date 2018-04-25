var connect=require('connect');
var http=require('http');

var application=connect();

function doFirst(request,response,next){
	console.log("This is second task of application");
	next();
}
function doSecond(request,response,next){
	console.log("This is second task of application");
	next();
}

application.use(doFirst);
application.use(doSecond);

http.createServer(application).listen(8070);
console.log("The server is running...");
