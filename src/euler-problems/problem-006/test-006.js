var assert = require('assert');
var Euler = require('./problem-006');

describe('Problem 6 - Sum square difference', function() {
	it('should identify 2640 for 10', function() {
		assert.equal(2640, Euler.problem6(10));
	});
	it('should identify 25164150 for 100', function() {
		assert.equal(25164150, Euler.problem6(100));
	});
});