/**
 * Problem 11 - Largest product in a grid
 * ... What is the greatest product of four adjacent numbers in the same
 * direction (up, down, left, right, or diagonally) in the 20×20 grid?
 */
module.exports.problem11 = function(dataset, length) {
	var maxProduct = 0;
	function replaceMaxIfGreater(x) {
		if (x > maxProduct) {
			maxProduct = x;
		}
	}

	for (var y = 0; y < dataset.length - length; y++) {
		for (var x = 0; x < dataset[y].length - length; x++) {
			// Starting point is x,y

			// Test right
			var currentProduct = 1;
			for (var i = 0; i < length; i++) {
				currentProduct *= dataset[y][x+i];
			}
			replaceMaxIfGreater(currentProduct);

			// Test down
			currentProduct = 1;
			for (i = 0; i < length; i++) {
				currentProduct *= dataset[y+i][x];
			}
			replaceMaxIfGreater(currentProduct);

			// Test diagonal right/down
			currentProduct = 1;
			for (i = 0; i < length; i++) {
				currentProduct *= dataset[y+i][x+i];
			}
			replaceMaxIfGreater(currentProduct);

			// Test diagonal right/up
			if (y > length) {
				currentProduct = 1;
				for (i = 0; i < length; i++) {
					currentProduct *= dataset[y-i][x+i];
				}
				replaceMaxIfGreater(currentProduct);
			}
		}
	}

	return maxProduct;
};