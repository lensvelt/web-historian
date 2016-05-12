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
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

  // what is returned from fs.readFile('/archives....') is "returned" as the data
  // argument in our callback

  // if not err, then read file,
  // if fail, send 404 message
  fs.access(asset, fs.F_OK, function(err) {
    if (err) { // shouuld 404 when asked for nonexistent file
      res.writeHead(404, exports.headers);
      res.end('File Not Found'); 
    } else { // send back asset, i.e. index.html
      fs.readFile(asset, function (err, data) {
        if (err) {
          throw err;
        }
        // need to prepare response which includes `data`.
        res.writeHead(200, exports.headers); // write to head
        res.end(data); // send data
      });
    } 
  });
}; // end serveAssets



// As you progress, keep thinking about what helper functions you can put here!












