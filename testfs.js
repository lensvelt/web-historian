var fs = require('fs'); 
var path = './test/testdata/sites.txt';

var readListOfUrls = function(callback) {
  fs.readFile(path, function(err, data) {
    if (err) {
      callback(err);
    } else {
      var list = data.toString().trim().split('\n');
      // console.log(list);
      callback(null, list);
    }
  });
};

var addUrlToList = function(siteUrl) {
  fs.appendFile(path, '\n' + siteUrl);
};

var isUrlInList = function(list, target) {
  return list.indexOf(target) !== -1;
};

// addUrlToList('www.albert.com');
readListOfUrls(function(err, list) {
  if (err) {
    console.log(err);
    throw errr;
  }

  console.log(isUrlInList(list, 'www.albert.com'));

});

// isUrlInList(), 'www.albert.com');

 