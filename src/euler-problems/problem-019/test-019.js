var assert = require('assert');
var Euler = require('./problem-019');

describe('Problem 19 - Counting Sundays', function() {
	it('should work for the Euler problem', function() {
		assert.equal(171, Euler.problem19());
	});
});