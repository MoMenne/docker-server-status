var sleep = require('sleep'), curl = require('node-curl');

console.log("running child process");
process.on('message', function (data) {
console.log('got the message' + data);

for (var i = 0; i > -1; i++ ) {

	// insert cURL call here to get status code

	var color = (i > 3);
	console.log('hey this is cool ' + i );
	process.send(color);
	sleep.sleep(3);
}

})
