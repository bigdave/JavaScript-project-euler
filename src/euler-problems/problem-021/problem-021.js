var Util = require('./../../utilities/util');

/**
 * Problem 21 - Amicable numbers
 *
 * Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
 * If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
 *
 * For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
 *
 * Evaluate the sum of all the amicable numbers under 10,000.
 *
 */
module.exports.problem21 = function() {
	var sum = 0;
	var amicables = [];

	var i = 1;
	while (i < 10000) {
		var pair = Util.findAmicablePair(i);
		if (pair && (amicables.indexOf(i) == -1)) {
			amicables.push(pair);
			sum = sum + i + pair;
		}
		i++;
	}
	return sum;
}