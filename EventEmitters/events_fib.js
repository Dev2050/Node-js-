/*var fib = function(n){
	if(n<2) return n;
	return fib(n-1)+fib(n-2);
};*/

var xcv=function(n){
	var i;
	var count=20;
	while(count>0){
			n=n+count+(2*n);
			console.log(+n);
		count-=1;
	}
}

var obj = function(){};

obj.prototype.doSomething = function(arg1_){
	var callback_ = arguments[arguments.length-1];
	callback=(typeof(callback_)=='function'?callback_:null);
	var arg1=typeof arg1_=='number' ? arg1_:null;
	if(!arg1)
		return callback(new Error('first arg missing or not a number'));
		process.nextTick(function(){
		//block on cpu
		var data=xcv(arg1);
		callback(null, data);
	});
}

var test=new obj();
var number=15;

test.doSomething(number, function(err, value){
	if(err)
		console.error(err);
	else
		console.log('fibonaci value for %d is %d', number, value);
});
console.log('called doSomething');