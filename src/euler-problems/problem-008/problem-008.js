/**
 * Problem 8 - Largest product in a series
 * The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
 * 731671765313306249192...9989...3257530420752963450
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */
module.exports.problem8 = function(string, n) {
	var max = 0;

	var product;
	function multiplyByProduct(n) {
		product *= n;
	}

	for (var i = 0; i <= (string.length - n); i++) {
		var slice = string.substr(i,n).split('');
		product = 1;
		slice.forEach(multiplyByProduct);
		if (product > max) {
			max = product;
		}
	}
	return max;
};