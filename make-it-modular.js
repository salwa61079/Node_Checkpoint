// to use my module called mymodule.js which  contains my directory reading 
//and filtering function called myfilterfunc
const myfilterfunc=require("./mymodule")
//
const path = require('path');
//function call with command line arguments
  myfilterfunc(process.argv[2], process.argv[3], function (err, list) {
    if (err)
      return console.error('There was an error:', err)
  
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
  })

  //learnyounode verify make-it-modular.js 'E:/Salwa/GomyCode/CheckpointNode' 'js'
  // node make-it-modular.js 'E:/Salwa/GomyCode/CheckpointNode' 'js'