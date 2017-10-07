var fs = require('fs');
var readline = require('readline');


  stream = fs.createReadStream("calculator.dat", {
    flags: 'r',
    encoding: 'utf-8',
    fd: null,
    bufferSize: 1
  });

  var rl = readline.createInterface({
  input: stream
  //output: process.stdout
});

var calc =require('./calculator');

rl.on('line', function(input) {
  
   var data= input.split(',');
   console.log(calc[data[0]](data[1],data[2]));
 

});


