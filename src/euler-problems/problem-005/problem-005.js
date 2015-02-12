var Util = require('./../../utilities/util');

/**
 * Problem 5 - Smallest multiple
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
module.exports.problem5 = function(n) {
	// Base cases
	if (n < 3) {
		return n;
	}

	for (var possibility = n; true; possibility += n) {
		if (Util.checkDivisibilityByRange(possibility, 2, n)) {
			return possibility;
		}
	}
};