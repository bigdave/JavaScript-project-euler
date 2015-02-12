var assert = require('assert');
var Euler = require('./problem-005');

describe('Problem 5 - Smallest multiple', function() {
	it('should identify 2 as the smallest multiple from 1 to 2', function() {
		assert.equal(2, Euler.problem5(2));
	});
	it('should identify 6 as the smallest multiple from 1 to 3', function() {
		assert.equal(6, Euler.problem5(3));
	});
	it('should identify 12 as the smallest multiple from 1 to 4', function() {
		assert.equal(12, Euler.problem5(4));
	});
	it('should identify 60 as the smallest multiple from 1 to 5', function() {
		assert.equal(60, Euler.problem5(5));
	});
	it('should identify 60 as the smallest multiple from 1 to 6', function() {
		assert.equal(60, Euler.problem5(6));
	});
	it('should identify 420 as the smallest multiple from 1 to 7', function() {
		assert.equal(420, Euler.problem5(7));
	});
	it('should identify 840 as the smallest multiple from 1 to 8', function() {
		assert.equal(840, Euler.problem5(8));
	});
	it('should identify 2520 as the smallest multiple from 1 to 9', function() {
		assert.equal(2520, Euler.problem5(9));
	});
	it('should identify 2520 as the smallest multiple from 1 to 10', function() {
		assert.equal(2520, Euler.problem5(10));
	});
	it('should identify 232792560 as the smallest multiple from 1 to 20', function() {
		assert.equal(232792560, Euler.problem5(20));
	});
});