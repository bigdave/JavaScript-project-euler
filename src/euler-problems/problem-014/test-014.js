var assert = require('assert');
var Euler = require('./problem-014');

describe('Problem 14 - Longest Collatz sequence', function() {
	it('should determine the number with the longest sequence', function() {
		this.timeout(10000);
		assert.equal(837799, Euler.problem14(1000000));
	});
});