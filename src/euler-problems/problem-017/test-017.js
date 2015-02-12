var assert = require('assert');
var Euler = require('./problem-017');

describe('Problem 17 - Number letter counts', function() {
	it('should work for a single, known example', function() {
		assert.equal(3, Euler.problem17(1));
	});
	it('should work for the Euler example of 1000', function() {
		assert.equal(21124, Euler.problem17(1000));
	});
});