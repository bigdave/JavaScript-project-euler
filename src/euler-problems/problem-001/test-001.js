var assert = require('assert');
var Euler = require('./problem-001');

describe('Problem 1 - Multiples of 3 and 5', function() {
	it('should return 23 for the sum of multiples of 3 and 5 less than 10', function() {
		assert.equal(23, Euler.problem1(10));
	});
	it('should return 233168 for the sum of multiples of 3 and 5 less than 1000', function() {
		assert.equal(233168, Euler.problem1(1000));
	});
});