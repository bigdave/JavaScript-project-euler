var assert = require('assert');
var Euler = require('./problem-067');

describe('Problem 67 - Maximum path sum II', function() {
	it('should work for the Euler problem', function() {
		assert.equal(7273, Euler.problem67('problem-067/data-067.txt'));
	});
});