var sleep = require('sleep'), curl = require('node-curl');



for (var i = 0; i < 1; i++ ) {
	console.log('run curl');
        curl.reset();
        curl.debug = 1;
        curl('www.google.com', function(err) {
		console.log('CURL');
		if (err) {
			console.log('error!!!!!' + err);
		}
              console.log('CURL COMPLETED! ' + this);
        });
      
        var color = (i % 2 ===0);
        console.log('hey this is cool ' + i );
        sleep.sleep(3);
}

