var Util = require('./../../utilities/util');

/**
 * Problem 14 - Longest Collatz sequence
 *
 * The following iterative sequence is defined for the set of positive integers:
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 *
 * Which starting number, under one million, produces the longest chain?
 */
module.exports.problem14 = function(max) {
	var maxLength = 0;
	var maxNumber = 0;

	for (var i = max; i > 0; i--) {
		var length = Util.findCollatzLength(i);
		if (length > maxLength) {
			maxLength = length;
			maxNumber = i;
		}
	}

	return maxNumber;
};