var http = require('http');
var fs = require('fs');
var url = require('url');

var get_all = require('./inventory.js');
var order = require('./order.js');

// Create a server
http.createServer( function (request, response) {  
      switch (request.url) {
         case "/get_all":
            console.log('get_all');
            response.write(get_all.get_all());

            break;
         case "/test" :
            console.log('test');
            break;
         case "/order" :
            console.log('order');
            response.write(order.order());
            break;   
      }
      console.log('create server');
      response.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
