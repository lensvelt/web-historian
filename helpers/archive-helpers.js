var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) { // return array
  fs.readFile(exports.paths.list, 'utf8', function(err, data) {
    //pass error through to callback
    if (err) {
      callback(err);
    } else {
      //no error, pass data through to callback
      callback(data.split('\n'));
    }
  });
};

exports.isUrlInList = function(target, callback) {
  // TODO: May need to change how callback is used 
  // list.indexOf(target) !== -1;
  callback(target);
};

exports.addUrlToList = function(siteUrl, callback) {
  fs.appendFile(exports.paths.list, siteUrl + '\n', callback);
};

exports.isUrlArchived = function(siteUrl, callback) {
  fs.access(exports.paths.archivedSites + '/' + siteUrl, fs.F_OK, callback);
};

exports.downloadUrls = function(urlArray) {
  urlArray.forEach(function(url) {

    fs.mkdir(exports.paths.archivedSites + '/' + url, function(err) {
      // console.log(err);
    });

    // TODO: use GET request to download site content
  });

};
