var assert = require('assert');
var Euler = require('./problem-021');

describe('Problem 21 - Amicable numbers', function() {
	it('should work for the Euler problem', function() {
		assert.equal(31626, Euler.problem21());
	});
});