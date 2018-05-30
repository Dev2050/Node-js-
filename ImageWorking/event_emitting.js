process.stdin.setEncoding('utf8');
/*var http=require('http');

http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Dataying\n');
}).listen(8124);*/

process.stdin.on('readable', function(){
	var input = process.stdin.read();
	if(input!=null){
		"use strict";
		let a =[1,2,3];
		let b = Buffer.from(a);
		
		
		let a2 = new Uint8Array([1,2,3,4]);
		let b2 = Buffer.from(a2);
		
		
		
		let buf=new Buffer('Converting buffer to json.');
		let json = JSON.stringify(buf);
		
		let to_string=new Buffer(JSON.parse(json).data);
		
		
		
		var command=input.trim();
		
		switch(command){
			case 'q':
			process.stdout.write(input+console.log(b)+'\n');
			break;
			case 'z':
			process.stdout.write(input+console.log(b2)+'\n');
			break;
			case 'k':
			process.stdout.write(input+console.log(json)+'\n');
			case 'v':
			process.stdout.write(input+console.log(to_string.toString('ascii'))+'\n'+console.log(to_string.toString('ascii',18,25)));
			default:
			process.exit(0);	
		}
	}
});