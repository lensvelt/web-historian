var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var reqHand = require('./request-handler');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {

  fs.readFile(asset, function (err, data) {
    if (err) {
      res.writeHead(404, exports.headers);
      res.end('File Not Found'); 
    }
    // need to prepare response which includes `data`.
    res.writeHead(200, exports.headers); // write to head
    res.end(data); // send data
  });

}; 













