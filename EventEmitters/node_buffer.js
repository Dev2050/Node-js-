'use strict';

exports.node_buffer=function(){
	let a =[1,2,3];
	let b = Buffer.from(a);
	console.log(b);
};
