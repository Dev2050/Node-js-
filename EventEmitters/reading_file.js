var fs=require('fs');
var writeStream=fs.createWriteStream('./data/apples.txt',{flags:'a', encoding:'utf8', mode:0666});
writeStream.on('open', function(){
	var counter=0;
	fs.readdir('./data/', function(err, files){
		if(err){console.error(err.message);
		}else{
			files.forEach(function(name){
				fs.stat('./data/'+name, function(err, stats){
					if(err) return err;
					if(!stats.isFile()){
						counter++;
						return;
						//modify file
						fs.readFile('./data/'+name,'utf8', function(err,data){
							if(err){console.error(err.message);}else{
								var adjData=data.replace(/[A|a]pple/g, 'orange');
							}
								//write to file
								fs.writeFile('./data/'+name, adjData,function(err){
									if(err){
										console.error(err.message);
									}else{
										//log write
										writeStream.write('changed'+name+'\n', function(err){
											if(err){
												console.error(err.message);
											}else{
												console.log('finished'+name);
												counter++;
												if(counter>=files.length){
													console.log('all done');
												}
											}
										});
									}
								});
						});
					}
				});
			});
		}
	})
});
writeStream.on('error', function(err){
	console.error("ERROR: "+err);
});