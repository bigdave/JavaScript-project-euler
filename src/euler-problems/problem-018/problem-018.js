var Import = require('./../../utilities/import');

/**
 * Problem 18 - Maximum path sum I
 *
 * By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
 *    3
 *   7 4
 *  2 4 6
 * 8 5 9 3
 *
 * That is, 3 + 7 + 4 + 9 = 23.
 *
 * Find the maximum total from top to bottom of the triangle [in problem18.txt]
 */
module.exports.problem18 = function(fileName) {
	data = Import.getIntegerTriangle(fileName);

	function reduceRow() {
		var penultimateRow = data[data.length-2];
		var ultimateRow = data[data.length-1];

		for (var i = 0; i < penultimateRow.length; i++) {
			var a = penultimateRow[i]+ultimateRow[i];
			var b = penultimateRow[i]+ultimateRow[i+1];

			penultimateRow[i] = a > b ? a : b;
		}

		data.pop();
	}

	while (data.length > 1) {
		reduceRow();
	}

	return data[0][0];
}