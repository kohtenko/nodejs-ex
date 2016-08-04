// var json = require('./json.js');
var jsonfile = require('jsonfile');

module.exports = {
	order: function() {
		var str = JSON.stringify(getJSON());
	    console.log(str);
		return str;
	}	
}


function saveEmptyJSON () {
	var file = '/tmp/order_data.json';
	obj = {};
	jsonfile.writeFileSync(file, obj);
	console.log("created"); 			
}

function getJSON () {
	var file = '/tmp/order_data.json';
	var obj = null;
	try {
   		obj = jsonfile.readFileSync(file)
		} catch (ex) {
			saveEmptyJSON()
			obj = {}
		}
	return obj
}

function saveJSON (object) {
	var file = '/tmp/order_data.json';
	jsonfile.writeFileSync(file, object);
	console.log("saved"); 			
}