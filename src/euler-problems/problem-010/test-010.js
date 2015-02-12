var assert = require('assert');
var Euler = require('./problem-010');

describe('Problem 10 - Summation of primes', function() {
	it('should sum all primes under 10 as 17', function() {
		assert.equal(17, Euler.problem10(10));
	});
	it('should sum all primes under 2,000,000 as 142,913,828,922', function() {
		assert.equal(142913828922, Euler.problem10(2000000));
	});
});