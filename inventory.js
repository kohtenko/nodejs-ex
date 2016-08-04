// var json = require('./json.js');
var jsonfile = require('jsonfile');

module.exports = {
	get_all: function() {
		var str = JSON.stringify(getJSON());
	    console.log(str);
		return str;
	},

	add_item: function(item_id, count, tennant_id) {
		console.log( objectForItemId(object["item_id"]));
	}	
}

function saveEmptyJSON () {
	var file = '/tmp/data.json';
	obj = {};
	jsonfile.writeFileSync(file, obj);
	console.log("created"); 			
}

function getJSON () {
	var file = '/tmp/data.json';
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
	var file = '/tmp/data.json';
	jsonfile.writeFileSync(file, object);
	console.log("saved"); 			
}

function objectForItemId (item_id) {
	var json = getJSON();
	var filterred = json.filter(function(object) {
  		return object["item_id"] == object[item_id]
	})
	return filterred[0];
}

function addOrUpdateObject (object) {
	
}

