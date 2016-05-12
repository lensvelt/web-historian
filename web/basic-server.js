var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');
var urlParser = require('url');

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./archives');

var port = 8080;
var ip = '127.0.0.1';

var router = {
  '/': 'some function'
};


var server = http.createServer(function(req, res) {
  var route = router[urlParser.parse(req.url).pathname];
  
  if (route) {
    route(req, res);
  } else {
    //Send 404 Not Found
  }

  handler.handleRequest(req, res);
});

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}

