//console.log(process);
//console.log(Object.keys(process));
// Output a prompt
var commands = require('./command');
process.stdout.write('prompt > ');
// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  var args = data.toString().trim().split(" ");

  //console.log(data.toString());
  var cmd = args.shift();

  args = args.join(" ");

   // remove the newline
  commands[cmd](args);
    //process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});
