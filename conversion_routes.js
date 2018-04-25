var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	app.get('/conversion/:id', (req, res) => {
	const id = req.params.id;
	const details = { '_id': new ObjectID(id) };
		db.collection('conversion').findOne(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send(item);
			}
		});
	});
	app.post('/conversion', (req, res) => {
		var str={
			title: req.body.title,
			value: req.body.body
		}
		var strg=str.value;
		var result = 0;
		var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
		var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
		for (var i = 0;i<=decimal.length;i++) {
			while (strg.indexOf(roman[i]) === 0){
			  result += decimal[i];
			  strg = strg.replace(roman[i],'');
			}
		} 
		const response={
			title: 'Decimal format',
			value: result
		}
		console.log('Received roman format is '+ "'" +str.value+ "'"+ " and the corresponding decimal format is " +result+ '.');
		db.collection('conversion').insert(response, (err, result) => {
			if (err) {
				res.send({ 'error': 'An error has occurred' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});	
};

