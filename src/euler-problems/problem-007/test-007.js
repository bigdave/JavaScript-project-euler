var assert = require('assert');
var Euler = require('./problem-007');

describe('Problem 7 - 10001st prime', function() {
	it('should identify 104743 as the 10001st prime', function() {
		assert.equal(104743, Euler.problem7(10001));
	});
});