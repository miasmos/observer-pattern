# observer-pattern  
A simple observer pattern implementation in javascript.  
  
```npm install observer-pattern```  
  
# Example  
```
var o = require('./Observer'),  
	Observer = new o();  
  
Observer.on('lul', function(callerArgs, calleeArgs) {  
	console.log(callerArgs, calleeArgs)  
}, {test: 'test'});  
  
Observer.emit('lul', {test1: 'test1'});	//logs args as above  
Observer.off('lul');  
Observer.emit('lul');	//does nothing  
```