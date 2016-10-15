/* Blocking Code Example */
/*                       */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());

console.log("Program Ended");

/* Non-Blocking Code Example */
/* any async function accepts a callback as the last parameter     */
/* and a callback function accepts an error as the first parameter */
/* fs.readFile() is an async function: */
/*   first parameter is the filename to readFile
/*   second and last parameter is the callback function
/*   the call back function (noname) takes err and data as parameters */
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) {
//    return console.log(err.stack);     // using console.log
      return console.error(err);         // using console.error 
        }
    filestring = data.toString();
    console.log(filestring);
} );

console.log("Program Ended");
