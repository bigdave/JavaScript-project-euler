var Util = require('./../../utilities/util');

/**
 * Problem 17 - Number letter counts
 *
 * If the numbers 1 to 5 are written out in words: one, two, three, four, five,
 * then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
 *
 * If all the numbers from 1 to 1000 (one thousand) inclusive were written out
 * in words, how many letters would be used?
 */
module.exports.problem17 = function(limit) {
	var total = 0;

	var currentWords;
	for (var i = 1; i <= limit; i++) {
		// Sum the letters
		currentWords = Util.integerToWords(i).replace(/\s+/g, '').replace(/-+/g, '');
		total += currentWords.length;
	}

	return total;
}