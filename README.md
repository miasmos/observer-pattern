![Travis CI](https://api.travis-ci.org/stephenpoole/observer-pattern.svg?branch=master)  

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
Removes an event named ```event```.  
  
Parameters  
```event``` (*string*) The name of the event.  
```callback``` (*optional function*) A function to match. If supplied, this will remove only registered events with the specified function as their callback. If not supplied, this method will remove all registered ```event``` events.  
  
  
**emit(** *event*, *arguments* **)**  
Emits an event named ```event```.  
  
Parameters  
```event``` (*string*) The name of the event. If no observers exist for the specified event, does nothing.  
```arguments``` (*optional object*) An object of arguments to pass to each callback function. Called calleeArgs above.  
  
#License  
MIT License  
  
Copyright (c) 2017 Stephen Poole  
  
Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:  
  
The above copyright notice and this permission notice shall be included in all  
copies or substantial portions of the Software.  
  
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
