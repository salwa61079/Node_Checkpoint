
/*Write a program that uses a single asynchronous filesystem operation to       
  read a file and print the number of newlines it contains to the console       
  (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument.*/

var fs = require('fs')
// path to file process.argv[2] 
//path 'E:/Salwa/GomyCode/CheckpointNode/test.txt'
fs.readFile(process.argv[2], function (err, contents) {
    var lines = contents.toString().split('\n').length - 1;
    console.log("number of new lines = "+ lines);
    })