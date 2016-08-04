var jsonfile = require('jsonfile');

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

module.exports = [saveEmptyJSON, getJSON, saveJSON]