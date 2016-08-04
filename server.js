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
         case "/test" :
            console.log('test');
            break;

         case "/order" :
            console.log('order');
            response.write(order.order());
            break;   

         case "/scan" :
            console.log('add_item');
            var fullBody = '';
            request.on('data', function(chunk) {
               fullBody += chunk
            });

            request.on('end', function() {
               var decodedBody = querystring.parse(fullBody);
               console.log(decodedBody);
               console.log(decodedBody["item_id"]);
               console.log('create server');

               // response.end();
            });
            
            // response.write(get_all.add_item(request.params["item_id"], request.params["count"], request.params["tennant_id"]));

      }
      response.end();
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
