var m = require('./Messenger'),
	Messenger = new m();

Messenger.on('lul', function(callerArgs, calleeArgs) {
	console.log(callerArgs, calleeArgs)
}, {test: 'test'});

Messenger.emit('lul', {test1: 'test1'});	//logs args as above
Messenger.off('lul');
Messenger.emit('lul');	//does nothing