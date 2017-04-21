# observer-pattern  
A simple observer pattern implementation in javascript.  
  
```npm install observer-pattern```  
  
# Example  
```
var Observer = new (require('observer-pattern'))(),  
  
Observer.on('lul', function(callerArgs, calleeArgs) {  
	console.log(callerArgs, calleeArgs)  
}, {test: 'test'});  
  
Observer.emit('lul', {test1: 'test1'});	//logs args as above  
Observer.off('lul');  
Observer.emit('lul');	//does nothing  
```  
  
# Docs  
**on(** *event*, *callback*, *arguments* **)**  
Registers an event named ```event```.  
  
Parameters  
```event``` (*string*) The name of the event.  
```callback``` (*function*) A function to call when the event is triggered.  
```arguments``` (*optional object*) An object of arguments to pass to the callback function. Called callerArgs above.  
  
  
**off(** *event*, *function* **)**  
Removes a registered event.  
  
Parameters  
```event``` (*string*) The name of the event.  
```callback``` (*function*) A function to match. If supplied, this will remove only registered events with the specified function as their callback. If not supplied, this method will remove all registered ```event``` events.  
  
  
**emit(** *event*, *arguments* **)**  
Emits an event named ```event```.  
  
Parameters  
```event``` (*string*) The name of the event. If no observers exist for the specified event, does nothing.  
```arguments``` (*optional object*) An object of arguments to pass to each callback function. Called calleeArgs above.