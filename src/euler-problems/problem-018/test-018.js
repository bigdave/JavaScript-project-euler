var assert = require('assert');
var Euler = require('./problem-018');

describe('Problem 18 - Maximum path sum I', function() {
	it('should work for the Euler problem', function() {
		assert.equal(1074, Euler.problem18('problem-018/data-018.txt'));
	});
});