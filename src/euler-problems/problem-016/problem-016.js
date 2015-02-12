/**
 * Problem 16 - Power digit sum
 *
 * 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
 * What is the sum of the digits of the number 2^1000?
 */
module.exports.problem16 = function(power) {
	var number = [1];
	var sum = 0;

	for(var i = 0; i < power; i++) {
		var overflow = 0;
		var count = number.length + 1;

		for(var j = 0; j < count; j++) {
			var digit = number[j] || 0;

			digit = 2 * digit + overflow;

			if(digit > 9) {
				digit -= 10;
				overflow = 1;
			} else {
				overflow = 0;
			}

			number[j] = digit;
		}
	}

	for(i = 0; i < power; i++) {
		sum += number[i];
	}

	return sum;
};