var assert = require('assert')

describe('Messenger', function() {
	it('should emit an event when registered', function(done) {
		var messenger = new (require('../Messenger'))()

		messenger.on('test', done)
		messenger.emit('test')
	})

	it('should pass caller args', function(done) {
		var messenger = new (require('../Messenger'))()
		messenger.on('test', function(callerArgs, calleeArgs) {
			var error = !(typeof callerArgs !== 'undefined' || 'test' in callerArgs || callerArgs.test === 'test')
			done(error ? new Error('callerArgs is undefined') : undefined)
		}, {test: 'test'})
		messenger.emit('test')
	})

	it('should pass callee args', function(done) {
		var messenger = new (require('../Messenger'))()
		messenger.on('test', function(callerArgs, calleeArgs) {
			var error = !(typeof calleeArgs !== 'undefined' || 'test' in calleeArgs || calleeArgs.test === 'test')
			done(error ? new Error('calleeArgs is undefined') : undefined)
		})
		messenger.emit('test', {test: 'test'})
	})

	it('should remove an event when removed', function(done) {
		var messenger = new (require('../Messenger'))(),
			called = false
		messenger.on('test', function() {
			called = true
		})
		messenger.off('test')
		messenger.emit('test')
		done(called || undefined)
	})
})