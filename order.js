// var json = require('./json.js');
var jsonfile = require('jsonfile');



order = function(jsonstr) {
        console.log('order.js params: ');
        console.log(jsonstr);
		var str = JSON.stringify(getJSON());
	    console.log(str);
		return str;
}

module.exports = {
	order: order	
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

function initInventoryJSON() {
    var inventory = [
        {"item_id":1,"count":2,"description":"Mario",
        "image":"http://www.mariowiki.com/images/thumb/6/62/Mario_Paper.jpg/180px-Mario_Paper.jpg"},
    {"item_id":1,"count":2,"description":"Mario",
        "image":"http://www.mariowiki.com/images/thumb/6/62/Mario_Paper.jpg/180px-Mario_Paper.jpg"}]

    console.log(JSON.stringify(jsonObj));
}

function saveJSON (object) {
	var file = '/tmp/data.json';
	jsonfile.writeFileSync(file, object);
	console.log("saved"); 			
}