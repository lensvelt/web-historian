var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('../web/http-helpers');
// require more modules/folders here!

var sendResponse = function(response, data, status) {
  status = status || 200;
  // write to head
  response.writeHead(status, httpHelpers.headers);
  // serialize data
  response.end(JSON.stringify(data));
};

var actions = {
  'GET': function(request, response) {
    sendResponse(response, archive.paths.list, 200); // unsure of data
  },
  'POST': function(request, response) {
    // collect data

    // send response
    sendResponse(response, archive.paths.list, 200); // unsure of data
  }, 
  'OPTIONS': function(request, response) {
    sendResponse(response, null, 200); // unsure of data
  }
};


exports.handleRequest = function (req, res) {
  var action = actions[req.method];
  if (action) {
    action(req, res);    
  } else {
    sendResponse(res, 'Not Found', 404); 
  }
  
  // sendResponse(res, archive.paths.list, 200); // res.end(archive.paths.list);




};
