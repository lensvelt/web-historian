var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('../web/http-helpers');
// require more modules/folders here!

var messages = [];

exports.actions = {
  'GET': function(request, response) {
    exports.sendResponse(response, {results: messages}, 200); // unsure of data
  },
  'POST': function(request, response) {
    // collect data

    // send response
    exports.sendResponse(response, archive.paths.list, 200); // unsure of data
  }, 
  'OPTIONS': function(request, response) {
    exports.sendResponse(response, null, 200); // unsure of data
  }
};

exports.sendResponse = function(response, data, status) { // data is html content
  status = status || 200;
  // write to head
  response.writeHead(status, httpHelpers.headers);
  // serialize data
  response.end(JSON.stringify(data));
};

exports.collectData = function() {

};

exports.handleRequest = function (req, res) {
  var action = exports.actions[req.method];
  if (action) {
    action(req, res);
  } else {
    exports.sendResponse(res, 'Not Found', 404); 
  }
};
