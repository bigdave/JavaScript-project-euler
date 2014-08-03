var assert = require("assert");
var euler = require("./euler");

// Problem 1 - Multiples of 3 and 5
describe('Euler', function() {
  describe('Problem 1 - Multiples of 3 and 5', function() {
    it('should return 23 for the sum of multiples of 3 and 5 less than 10', function() {
      assert.equal(23, euler.problem1(10));
    });
    it('should return 233168 for the sum of multiples of 3 and 5 less than 1000', function() {
      assert.equal(233168, euler.problem1(1000));
    });
  });
});
