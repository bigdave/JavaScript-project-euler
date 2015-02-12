var assert = require('assert');
var Euler = require('./problem-004');

describe('Problem 4 - Largest palindrome product', function() {
	it('should identify 91 * 99 = 9009 as the largest for 2-digit numbers', function() {
		var palindrome = Euler.problem4(2);
		assert.equal(9009, palindrome.number);
		assert([91,99].equals(palindrome.identities));
	});
	it('should identify 913 * 993 = 906609 as the largest for 3-digit numbers', function() {
		var palindrome = Euler.problem4(3);
		assert.equal(906609, palindrome.number);
		assert([913,993].equals(palindrome.identities));
	});
});