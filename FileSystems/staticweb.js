var http=require('http'),
url=require('url'),
fs=require('fs'),
mime=require('mime'),
path=require('path');
var base='./public_html.html';
//var pathbase='King of Kings Lord of Lords Jesus Christ';

http.createServer(function(req, res){
	pathname=path.normalize(base+req.url);
	console.log(pathname);

	fs.stat(pathname, function(err, stats){
		if(err){
			console.log(err);
			res.writeHead(404);
			res.write('Resource missing 404 reqn');
			res.end();
		}else if(stats.isFile()){
			//content type
			var type=mime.lookup(pathname);
			console.log(type);
			res.setHeader('Content-Type',type);
			
			//create and pipe readable stream
			var file= fs.createReadStream(pathname);
			file.on("open",function(){
				res.statusCode=200;
				file.pipe(res);
			});
			file.on("error", function(err){
				console.log(err);
				res.writeHead(403);
				res.write('file missing or permission problem');
				res.end();
			});
			
		}else{
			res.writeHead(403);
			res.write('Directory access is forbidden');
			res.end();
		}
		/*res.setHeader('Content-type','text\html');*/
	});
}).listen(8124);
console.log('listening at port 8124');
