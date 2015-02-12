var assert = require('assert');
var Euler = require('./problem-002');

describe('Problem 2 - Even Fibonacci numbers', function() {
	it('should return 4613732 for the sum of fibonacci numbers under 4,000,000', function() {
		assert.equal(4613732, Euler.problem2(4000000));
	});
});