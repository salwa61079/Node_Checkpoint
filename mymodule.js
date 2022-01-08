const fs = require('fs');
const path = require('path');
  
//module.exports = function (args) { /* ... */ }
//or 
//const functionname = function (args) { /* ... */ }
//module.exports = functionname
//so
//module.exports = function (dir, filterStr, callback) { /*.....*/}  
//or
const myfilterfunc = function (dir, filterStr, callback) {
    fs.readdir(dir, function (err, list) {
      if (err)
        return callback(err)
  
      list = list.filter(function (file) {
        return path.extname(file) === '.' + filterStr
      })
  
      callback(null, list)
    })
  };
  module.exports = myfilterfunc;
  
 