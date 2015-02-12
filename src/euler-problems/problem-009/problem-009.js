/**
 * Problem 9 - Special pythagorean triplet
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */
module.exports.problem9 = function(sum) {
	for (var a = 1; a < sum; a++) {
		for (var b = 1; b < sum; b++) {
			var c = Math.sqrt(a*a+b*b);
			if ((c % 1 === 0) && (a+b+c === 1000)) {
				return a*b*c;
			}
		}
	}
};