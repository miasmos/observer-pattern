var assert = require('assert')

describe('Observer', function() {
	it('should emit an event when registered', function(done) {
		var observer = new (require('../Observer'))()

		observer.on('test', done)
		observer.emit('test')
	})

	it('should pass caller args', function(done) {
		var observer = new (require('../Observer'))()
		observer.on('test', function(callerArgs, calleeArgs) {
			var error = !(typeof callerArgs !== 'undefined' || 'test' in callerArgs || callerArgs.test === 'test')
			done(error ? new Error('callerArgs is undefined') : undefined)
		}, {test: 'test'})
		observer.emit('test')
	})

	it('should pass callee args', function(done) {
		var observer = new (require('../Observer'))()
		observer.on('test', function(callerArgs, calleeArgs) {
			var error = !(typeof calleeArgs !== 'undefined' || 'test' in calleeArgs || calleeArgs.test === 'test')
			done(error ? new Error('calleeArgs is undefined') : undefined)
		})
		observer.emit('test', {test: 'test'})
	})

	it('should remove an event when removed', function(done) {
		var observer = new (require('../Observer'))(),
			called = false
		observer.on('test', function() {
			called = true
		})
		observer.off('test')
		observer.emit('test')
		done(called || undefined)
	})
})