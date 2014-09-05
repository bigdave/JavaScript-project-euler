var fs = require('fs');
var path = require('path');
var root = path.resolve(__dirname, '../data');

function getData(fileName) {
  var file = path.resolve(root, fileName);
  if (fs.existsSync(file)) {
    return fs.readFileSync(file, 'utf8');
  }
}

function getIntegerTriangle(fileName) {
  var data = getData(fileName).trim().split('\n');
  var output = [];
  for (var i = 0; i < data.length; i++) {
    output[i] = data[i].split(' ').map(function(str) {
      return Number(str);
    });
  }
  return output;
}
exports.getIntegerTriangle = getIntegerTriangle;
