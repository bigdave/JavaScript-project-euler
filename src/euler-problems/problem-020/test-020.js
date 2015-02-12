var assert = require('assert');
var Euler = require('./problem-020');

describe('Problem 20 - Factorial digit sum', function() {
	it('should work for a known problem', function() {
		assert.equal(27, Euler.problem20(10));
	});
	it('should work for the Euler problem', function() {
		assert.equal(648, Euler.problem20(100));
	});
});