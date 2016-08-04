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

