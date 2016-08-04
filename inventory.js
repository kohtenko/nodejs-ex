// var json = require('./json.js');
var jsonfile = require('jsonfile');
var globalJSON = null;

module.exports = {
	get_all: function() {
		var str = JSON.stringify(getJSON());
	    console.log(str);
		return str;
	},

	add_item: function(item_id, count, tennant_id) {
		console.log( objectForItemId(object["item_id"]));
	},

	init_db: function() {
		console.log('init_db');
		initInventoryJSON();
	},

	order: function(jsonstr) {
		 console.log('order.js params strinf: ');
        console.log(jsonstr);
		
		var orderRequest = JSON.parse(jsonstr);

		console.log('orderRequest json:');
		console.log(orderRequest);

		console.log('orderRequest.item_id = ');

		console.log(orderRequest.item_id)

		var inventory = objectForItemId(orderRequest.item_id);

		if(inventory != null) {

			console.log('objectForItemId json:');
			console.log(inventory);

			inventory.count--;
			saveJSON(globalJSON);
	}

		// return str;
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
	globalJSON = obj;
	return obj
}

function initInventoryJSON() {
    var inventory = [
        {"item_id":0,"count":2,"description":"Mario",
        "image":"http://www.mariowiki.com/images/thumb/6/62/Mario_Paper.jpg/180px-Mario_Paper.jpg"},
        
       {"item_id":1,"count":21,"description":"Mario",
        "image":"http://www.mariowiki.com/images/thumb/6/62/Mario_Paper.jpg/180px-Mario_Paper.jpg"},

		{"item_id":3,"count":22,"description":"Mario",
        "image":"http://www.mariowiki.com/images/thumb/6/62/Mario_Paper.jpg/180px-Mario_Paper.jpg"}
		
		
		]

		var body = JSON.stringify(inventory);
    console.log('initInventoryJSON');
	console.log(body);

	saveJSON(inventory);
}

function saveJSON (object) {
	console.log('saveJSON');
	var file = '/tmp/data.json';
	jsonfile.writeFileSync(file, object);
	console.log("saved"); 			
}

function objectForItemId (item_id) {
	var json = getJSON();
	var filterred = json.filter(function(object) {
  		return object["item_id"] == item_id
	})
	return filterred[0];
}

function addOrUpdateObject (object) {
	
}

