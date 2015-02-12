var Util = require('./../../utilities/util');

/**
 * Problem 15 - Lattice paths
 */
module.exports.problem15 = function(size) {
	return Util.binomial(size*2, size);
};