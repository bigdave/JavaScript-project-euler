var assert = require('assert');
var Euler = require('./problem-012');

describe('Problem 12 - Highly divisible triangular number', function() {
	it('should work for the Euler examples', function() {
		assert.equal(1, Euler.problem12(1));
		assert.equal(3, Euler.problem12(2));
		assert.equal(6, Euler.problem12(3));
		assert.equal(6, Euler.problem12(4));
		assert.equal(28, Euler.problem12(5));
		assert.equal(76576500, Euler.problem12(500));
	});
});