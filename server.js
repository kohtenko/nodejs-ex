var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var get_all = require('./inventory.js');
var order = require('./order.js');

// Create a server
http.createServer( function (request, response) {  
      switch (request.url) {
         case "/get_all":
            console.log('get_all');
            response.write(get_all.get_all());

            break;

         case "/init_db":
            console.log('init_db');
            get_all.init_db();

            break;   
         case "/test" :
            console.log('test');
            break;

         case "/order" :
            console.log('order');

            
            var fullBody = '';
            var responseBody = 'some data';
            response.on('data', function(chunk) {
               fullBody += chunk
               response.write(responseBody);
            });

            request.on('data', function(chunk) {
               fullBody += chunk
               responseBody = get_all.order(fullBody);
               
            });

            break;   

         case "/scan" :
            console.log('add_item');
            
            var fullBody = '';
            var responseBody = 'some data';
            response.on('data', function(chunk) {
               fullBody += chunk
               response.write(responseBody);
            });

            request.on('data', function(chunk) {
               fullBody += chunk
               responseBody = get_all.addOrUpdateObject(fullBody);
               
            });


      }
      response.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
