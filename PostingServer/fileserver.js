//creating a web server that accepts compressed data and decompress it to a file
var readline=require('readline');

//create a new interface
var rl=readline.createInterface(process.stdin, process.stdout);

//ask question
rl.question(">>What are you upto?\n", function(answer){
	console.log("..." +answer);
	rl.setPrompt(">>");
	rl.prompt();
});

//function to close interface
function closeInterface(){
	rl.close();
	console.log('Leaving readline');
}

//listen for .leave
rl.on('line',function(cmd){
	if(cmd.trim()=='.leave'){
		closeInterface();
		return;
	}
	console.log("repeating command: " +cmd);
	rl.prompt();
});
rl.on('close', function(){
	closeInterface();
});