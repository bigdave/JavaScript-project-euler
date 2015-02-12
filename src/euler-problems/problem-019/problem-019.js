/**
 * Problem 19 - Counting Sundays
 *
 * How many Sundays fell on the first of the month during the twentieth
 * century (1 Jan 1901 to 31 Dec 2000)?
 */
module.exports.problem19 = function() {
	var sum = 0;
	var month = 0;
	var year = 1901;
	var date;

	while (year < 2001) {
		date = new Date(year, month, 1);
		if (date.getDay() === 0) {
			sum++;
		}

		// Increment the month
		month = ++month % 12;

		// Increment the year
		if (month === 0) {
			year++;
		}
	}

	return sum;
}