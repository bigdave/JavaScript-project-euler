var bigInt = require('big-integer');

/**
 * Problem 20 - Factorial digit sum
 *
 * n! means n × (n − 1) × ... × 3 × 2 × 1
 *
 * For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
 * and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27
 *
 * Find the sum of the digits in the number 100!
 */
module.exports.problem20 = function(n) {
	var factorial = bigInt(1);
	for (var i = 1; i < n; i++) {
		factorial = factorial.multiply(i);
	}

	factorial = factorial.toString();
	var sum = 0;
	for (i = 0; i < factorial.length; i++) {
		sum += Number(factorial.charAt(i));
	}

	return sum;
}