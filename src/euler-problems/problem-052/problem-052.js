var Import = require('./../../utilities/import');

/**
 * Problem 52 - Permuted multiples
 *
 * It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.
 * Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
 */
module.exports.problem52 = function(x) {
	var trialNumber = 1;

	function sortNumberAsString(n) {
		return Number(n.toString().split('').sort().join(''));
	}

	while (true) {
		var trialString = sortNumberAsString(trialNumber);

		for (var i = 2; i <= x; i++) {
			if (trialString !== sortNumberAsString(trialNumber*i)) {
				break;
			} else if (i === x) {
				return trialNumber;
			}
		}

		trialNumber++;
	}
}