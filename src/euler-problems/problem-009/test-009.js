var assert = require('assert');
var Euler = require('./problem-009');

describe('Problem 9 - Special Pythagorean triplet', function() {
	it('should find the product abc of the triplet a+b+c=1000', function() {
		assert.equal(31875000, Euler.problem9(1000));
	});
});