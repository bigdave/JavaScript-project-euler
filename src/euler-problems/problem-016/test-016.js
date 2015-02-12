var assert = require('assert');
var Euler = require('./problem-016');

describe('Problem 16 - Power digit sum', function() {
	it('should work for a known example', function() {
		assert.equal(26, Euler.problem16(15));
		assert.equal(76, Euler.problem16(50));
	});
	it('should work for the euler example', function() {
		assert.equal(1366, Euler.problem16(1000));
	});
});