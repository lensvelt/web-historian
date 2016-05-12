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



exports.collectData = function(req, res) {
  var data = '';
  req.on('data', function(chunk) { // data received in streams
    data += chunk;
  });
  req.on('end', function() {
    // momentarily skipping tests
    // append url to list
    archive.addUrlToList(data, function(data) {
      console.log(data);
    }); 
    exports.sendResponse(res, data, 302);
  });
};

exports.handleRequest = function (req, res) {
  var action = exports.actions[req.method];
  if (action) {
    action(req, res);
  } else {
    exports.sendResponse(res, 'Not Found', 404); 
  }
};
