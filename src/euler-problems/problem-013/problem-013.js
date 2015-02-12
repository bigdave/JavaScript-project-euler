/**
 * Problem 13 - Large sum
 *
 * Work out the first ten digits of the sum of the following one-hundred
 * 50-digit numbers. (Numbers are in the test cases)
 */
module.exports.problem13 = function(numbers) {
	var sum = 0;
	numbers.forEach(function(element) {
		sum += element;
	});

	return sum.toString().substr(0,10);
};