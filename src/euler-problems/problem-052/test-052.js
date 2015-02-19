var assert = require('assert');
var Euler = require('./problem-052');

describe('Problem 52 - Permuted multiples', function() {
	it('should work for the Euler problem', function() {
		assert.equal(142857, Euler.problem52(6));
	});
	it('should work for the Euler example', function() {
		assert.equal(125874, Euler.problem52(2));
	});
});