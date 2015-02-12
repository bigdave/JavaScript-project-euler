var assert = require('assert');
var Euler = require('./problem-022');

describe('Problem 22 - Name scores', function() {
	it('should work for the Euler problem', function() {
		assert.equal(871198282, Euler.problem22('problem-022/data-022.txt'));
	});
});