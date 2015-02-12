var Util = require('./../../utilities/util');

/**
 * Problem 4 - Largest palindrome product
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
module.exports.problem4 = function(n) {
	var LARGEST_n_DIGIT_NUMBER = (Math.pow(10,n))-1;

	// Setup the object to compare against for found palindromes
	var largestPalindrome = {};
	largestPalindrome.number = 0;

	for (var r = LARGEST_n_DIGIT_NUMBER; r > 0; r--) {
		for (var c = LARGEST_n_DIGIT_NUMBER; c >= r; c--) {
			if ((r*c > largestPalindrome.number) && Util.isPalindrome(r*c)) {
				largestPalindrome.number = r*c;
				largestPalindrome.identities = [r,c];
			}
		}
	}

	return largestPalindrome;
};