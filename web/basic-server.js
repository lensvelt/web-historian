var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');
var urlParser = require('url');
var arcHelp = require('../helpers/archive-helpers');
var httpHelp = require('./http-helpers');

// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./archives');

var port = 8080;
var ip = '127.0.0.1';



var server = http.createServer(function(req, res) {
  if (req.url === '/' && req.method === 'GET') {
    var asset = arcHelp.paths.siteAssets + '/index.html';
    httpHelp.serveAssets(res, asset);
  }

  
// var route = router[urlParser.parse(req.url).pathname];
  
  // handler.handleRequest(req, res);
  // if (route) {
  //   route(req, res);
  // } else {
  //   //Send 404 Not Found
  // }

  // // receive POST request with url

  // // if isUrlArchived
  // if (arcHelp.isUrlArchived(req.url, function(isArchived){
  //   if (isArchived) {
  //     sendResponse(res, htmlContent, statusCode);
  //   } else {

  //   }
  // }) {
  //   //use sendResponse to send the html file to the GET request
  // } else if (arcHelp.isUrlInList(req.url, ))
  //   //
  // }

  //   // send the serialized file(s) the AJAX response object
  //   // ... 
  // // else if isUrlInList 
  //   // send the serialized loading.html file in the AJAX response object
  // // else addUrlToList && download url

});

if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}

