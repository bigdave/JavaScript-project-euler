var assert = require('assert');
var Euler = require('./problem-003');

describe('Problem 3 - Largest prime factor', function() {
	it('should return 29 for the largest prime factor of 13195', function() {
		assert.equal(29, Euler.problem3(13195));
	});
	it('should return 6857 for the largest prime factor of 600851475143', function() {
		assert.equal(6857, Euler.problem3(600851475143));
	});
});