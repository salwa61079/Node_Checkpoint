/*Write a program that uses a single synchronous filesystem operation to        
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument*/

var fs = require('fs')
var contents = fs.readFileSync(process.argv[2])
var lines = contents.toString().split('\n').length -1
console.log("number of new lines= "+lines)

//path 'E:/Salwa/GomyCode/CheckpointNode/test.txt'