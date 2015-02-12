var assert = require('assert');
var Euler = require('./problem-015');

describe('Problem 15 - Lattice paths', function() {
	it('should work for a 20x20 grid', function() {
		assert.equal(137846528820, Euler.problem15(20));
	});
});