process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function(){
	
	var input = process.stdin.read();
	
	if(input!=null){
		"use strict";
		
		//StringDecoder
		let StringDecoder=require('string_decoder').StringDecoder;
		let decoder=new StringDecoder('utf-8');
		
		let euro=new Buffer([0xE2, 0x82]);
		let euro2=new Buffer([0xAC]);
		
		//Buffer Manipulation
		var buf = new Buffer(4);
		buf.writeUInt8(0X63,0);
		buf.writeUInt8(0x61,1);
		buf.writeUInt8(0x74,2);
		buf.writeUInt8(0x73,3);
		
		//buffer modification , "buffer.slice()"
		//slice the old buffer and create new onerror
		var buf1=new Buffer('Buffer building and slicing');
		buf2 = buf1.slice(7,buf1.length);
		
		//modify content
		var buf3=buf2.fill('*',14,buf2.length);
		
		var command=input.trim();
		switch(command){
			case 'q':
				process.stdout.write(input+':-'+console.log(decoder.write(euro))+ '\n'+ console.log(decoder.write(euro2))+'\n');
			break;
			
			case 'z':
				process.stdout.write(input+':-'+console.log(buf.toString()+'\n'));
			break;
			
			case 'm':
				process.stdout.write(input+':-'+console.log(''+buf2.toString())+'\n');
			break;
			
			case 'i':
				process.stdout.write(input+':-'+console.log('Slicing buffer' +buf2.toString())+'\n');
			break;
			
			case 'j':
				process.stdout.write(input + ':-'+console.log('Modifying buffer' +buf3.toString())+'\n');
			break;
			
			default:
				process.exit(0);
			break;
		}
	}
	
	
});

