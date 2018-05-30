//sp, exp 2 image loading 
var http = require('http');
var fs=require('fs');

http.createServer(function(req, res){
	var name=require('burningbird.net:8124/?name=burningbird').parse(req.url, true).query.name;
	if(name===undefined) name='lion';
	if(name=='burningbird'){
		var file='burningbird.png';
		fs.stat(file, function(err, stat){
			if(err){
				console.error(err);
				res.writeHead(200, {'Content-Type':'text/plain'});
				res.end('Requested file does not exist! \n');
			}
			else{
				var img = fs.readFileSync(file);
				res.contentType='image/png';
				res.contentLength=stat.size;
				res.end(img, 'binary');
			}
		});
	}else{
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.end('File requested: ' + name + '\n');
	}
}).listen(8124);

console.log('Server running at port 8134/');
