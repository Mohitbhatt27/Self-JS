/*
In JavaScript, an error-first callback is a function that takes an error object as its first parameter and a data object as its second parameter.
The error object is null if there is no error, and contains an error message if there is an error. The data object contains the result of the function call if there is no error
*/

function readFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

/*In this example, `readFile()` takes a filename and a callback function as input. The callback function takes an error object as its first parameter and a data object as its second parameter. If there is an error reading the file, the callback function returns the error object. If there is no error reading the file, the callback function returns null for the error object and the file contents for the data object.
 */

