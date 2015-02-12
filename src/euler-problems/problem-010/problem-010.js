var Util = require('./../../utilities/util');

/**
 * Problem 10 - Summation of primes
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */
module.exports.problem10 = function(limit) {
	var sum = 10;

	for (var i = 7; i < limit; i += 2) {
		// Skip checking isPrime for multiples of 3 or 5, seive style
		if (i % 3 === 0 || i % 5 === 0) {
			continue;
		}

		if (Util.isPrime(i)) {
			sum += i;
		}
	}

	return sum;
};