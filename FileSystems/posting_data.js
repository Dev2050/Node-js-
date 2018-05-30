var http = require('http');
var querystring=require('querystring');

var postData=querystring.stringify({'msg':'Hello World!'});
var options={
	hostname: 'localhost',
	port: 8124,
	method: 'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': postData.length
	}
};

var req=http.request(options, function(res){
	console.log('STATUS: ' +res.statusCode);
	console.log('HEADERS: '+JSON.stringfy(res.headers));
	res.setEncoding('utf8');
	res.on('data',  function(chunk){console.log('BODY: '+chunk)});
	req.on('end', function(){console.log('No more data response!')});
});
req.on('error', function(e){console.log('problem with the request: ' +e.message);});
req.write(postData);