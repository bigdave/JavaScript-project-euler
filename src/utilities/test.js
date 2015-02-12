var assert = require('assert');

var Util = require('./util');
Util.makeArraysComparable();

/* Utility test cases */
describe('util.js', function() {
  describe('errorIfNotInteger', function() {
    it('should return the integer for integers', function() {
      assert.equal(4, Util.errorIfNotInteger(4));
      assert.equal(0, Util.errorIfNotInteger(0));
      assert.equal(-187, Util.errorIfNotInteger(-187));
    });
    it('should throw an error for non-integers', function() {
      assert.throws( function() { Util.errorIfNotInteger(3.14); });
      assert.throws( function() { Util.errorIfNotInteger(true); });
      assert.throws( function() { Util.errorIfNotInteger(false); });
      assert.throws( function() { Util.errorIfNotInteger(0.5); });
      assert.throws( function() { Util.errorIfNotInteger(-101.9); });
      assert.throws( function() { Util.errorIfNotInteger('a'); });
      assert.throws( function() { Util.errorIfNotInteger('Jimmothy'); });
    });
  });
  describe('reverseString', function() {
    it('should reverse a string', function() {
      assert.equal('moM', Util.reverseString('Mom'));
      assert.equal('trebruh', Util.reverseString('hurbert'));
      assert.equal('craycray', Util.reverseString('yarcyarc'));
      assert.equal('esrever', Util.reverseString('reverse'));
    });
  });
  describe('reverseNumber', function() {
    it('should reverse a number', function() {
      assert.equal(1234, Util.reverseNumber(4321));
      assert.equal(789, Util.reverseNumber(987));
      assert.equal(1.234, Util.reverseNumber(432.1));
    });
  });
  describe('reverse', function() {
    it('reverses numbers', function() {
      assert.equal(1999, Util.reverse(9991));
      assert.equal(3.14159, Util.reverse(95141.3));
    });
    it('reverses strings', function() {
      assert.equal('Strange Brew', Util.reverse('werB egnartS'));
    });
  });
  describe('isPalindrome', function() {
    it('corectly identifies palindromes', function() {
      assert(Util.isPalindrome('wow'));
      assert(Util.isPalindrome('9009'));
    });
    it('correctly discriminates against non-palindromes', function() {
      assert(!Util.isPalindrome('Bread'));
      assert(!Util.isPalindrome('Delicious, delicious bread'));
      assert(!Util.isPalindrome(1620));
    });
  });
  describe('makeArraysComparable', function() {
    it('should return false for non-arrays', function() {
      assert(![4].equals('a'));
      assert(![4].equals(false));
      assert(![4].equals(true));
      assert(![4].equals(4));
      assert(![4].equals('foxtrot tango whiskey'));
    });
    it('should return false for non-equal arrays', function() {
      assert(![4].equals([3]));
      assert(![4].equals([2,3]));
      assert(![true].equals([true,false]));
      assert(![true].equals([false,true]));
      assert(![true,false,[true,false]].equals([true,false,[false,false]]));
      assert(![true,false,true].equals([true,false,[true]]));
    });
    it('should return true for equal arrays', function() {
      assert([4].equals([4]));
      assert([true,false,true].equals([true,false,true]));
      assert([true,false,[true,false]].equals([true,false,[true,false]]));
    });
  });
  describe('findProperDivisors()', function() {
    it('should find the proper divisors of 220', function() {
      assert(Util.findProperDivisors(220).equals([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]));
    });
    it('should find the proper divisors of 284', function() {
      assert(Util.findProperDivisors(284).equals([1, 2, 4, 71, 142]));
    });
    it('should find the proper divisors of a prime', function() {
      assert(Util.findProperDivisors(11).equals([1]));
      assert(Util.findProperDivisors(2027).equals([1]));
    });
  });
  describe('findAmicablePair()', function() {
    it('should work for mildly odd situations', function() {
      assert.equal(Util.findAmicablePair(1), false);
    });
    it('should find amicable pairs', function() {
      assert.equal(Util.findAmicablePair(220), 284);
      assert.equal(Util.findAmicablePair(1184), 1210);
      assert.equal(Util.findAmicablePair(71145), 67095);
    });
    it('should return false if there is no amicable pair', function() {
      assert.equal(Util.findAmicablePair(10), false);
      assert.equal(Util.findAmicablePair(500), false);
    });
  });
  describe('isPrime()', function() {
    it('should return true for 2', function() {
      assert(Util.isPrime(2));
    });
    it('should return true for prime numbers', function() {
      assert(Util.isPrime(3));
      assert(Util.isPrime(7));
      assert(Util.isPrime(19));
      assert(Util.isPrime(4297));
      assert(Util.isPrime(5003));
    });
    it('should return false for negative numbers', function() {
      assert.equal(false, Util.isPrime(-7));
      assert.equal(false, Util.isPrime(-20));
    });
    it('should return false for zero', function() {
      assert.equal(false, Util.isPrime(0));
    });
    it('should return false for non-prime numbers', function() {
      assert.equal(false, Util.isPrime(1));
      assert.equal(false, Util.isPrime(4));
      assert.equal(false, Util.isPrime(24));
      assert.equal(false, Util.isPrime(10000));
    });
    it('should return false for non-integer numbers', function() {
      assert.equal(false, Util.isPrime(-2.25));
      assert.equal(false, Util.isPrime(3.14159));
    });
  });
  describe('findPrimeFactors()', function() {
    it('should return 7 for 7', function() {
      assert([7].equals(Util.findPrimeFactors(7)));
    });
  });
  describe('nextPrimeAfter()', function() {
    it('should find 3 after 2', function() {
      assert.equal(3, Util.nextPrimeAfter(2));
    });
    it('should find 5 after 3', function() {
      assert.equal(5, Util.nextPrimeAfter(3));
    });
    it('should find 101 after 100', function() {
      assert.equal(101, Util.nextPrimeAfter(100));
    });
    it('should find 5003 after 5000.01', function() {
      assert.equal(5003, Util.nextPrimeAfter(5000.01));
    });
  });
  describe('findPrimeFactors()', function() {
    it('should return 7 for 7', function() {
      assert([7].equals(Util.findPrimeFactors(7)));
    });
    it('should return 2 and 3 for 6', function() {
      assert([2, 3].equals(Util.findPrimeFactors(6)));
    });
    it('should return 5, 7, 13, and 29 for 13195', function() {
      assert([5, 7, 13, 29].equals(Util.findPrimeFactors(13195)));
    });
    it('should throw an error with a non-integer', function() {
      assert.throws(function() { Util.findPrimeFactors(1.25); });
    });
  });
  describe('checkDivisibilityByRange()', function() {
    it('should return true for 4 / 4..4', function() {
      assert.equal(true, Util.checkDivisibilityByRange(4, 4, 4));
    });
    it('should return false for 5 / 6..6', function() {
      assert.equal(false, Util.checkDivisibilityByRange(5, 6, 6));
    });
    it('should return true for 12 / 2..4', function() {
      assert.equal(true, Util.checkDivisibilityByRange(12, 2, 4));
    });
    it('should return true for 90 / 3..3', function() {
      assert.equal(true, Util.checkDivisibilityByRange(90, 3, 3));
    });
    it('should return true for 2520 / 1..10', function() {
      assert.equal(true, Util.checkDivisibilityByRange(2520, 1, 10));
    });
    it('should throw an error if the min > max', function() {
      assert.throws(function() { Util.checkDivisibilityByRange(10, 10, 1); });
    });
  });
  describe('sumOfSquares()', function() {
    it('should return 385 for 10', function() {
      assert.equal(385, Util.sumOfSquares(10));
    });
  });
  describe('squareOfSums()', function() {
    it('should return 3025 for 10', function() {
      assert.equal(3025, Util.squareOfSums(10));
    });
  });
  describe('nthPrime()', function() {
    it('should be able to identify the first 7 primes', function() {
      assert.equal(2, Util.nthPrime(1));
      assert.equal(3, Util.nthPrime(2));
      assert.equal(5, Util.nthPrime(3));
      assert.equal(7, Util.nthPrime(4));
      assert.equal(11, Util.nthPrime(5));
      assert.equal(13, Util.nthPrime(6));
      assert.equal(17, Util.nthPrime(7));
    });
  });
  describe('findFactors()', function() {
    it('should work for 1', function() {
      assert([1].equals(Util.findFactors(1)));
    });
    it('should work for integers', function() {
      assert([1,3].equals(Util.findFactors(3)));
      assert([1,2,3,6].equals(Util.findFactors(6)));
      assert([1,2,4,7,14,28].equals(Util.findFactors(28)));
    });
  });
  describe('nthTriangleNumber()', function() {
    it('should work for 1', function() {
      assert.equal(1, Util.nthTriangleNumber(1));
    });
    it('should work for integers', function() {
      assert.equal(3, Util.nthTriangleNumber(2));
      assert.equal(6, Util.nthTriangleNumber(3));
      assert.equal(10, Util.nthTriangleNumber(4));
      assert.equal(15, Util.nthTriangleNumber(5));
      assert.equal(21, Util.nthTriangleNumber(6));
      assert.equal(28, Util.nthTriangleNumber(7));
      assert.equal(5050, Util.nthTriangleNumber(100));
      assert.equal(20100, Util.nthTriangleNumber(200));
      assert.equal(80200, Util.nthTriangleNumber(400));
      assert.equal(500500, Util.nthTriangleNumber(1000));
    });
  });
  describe('generateCollatzSequence()', function() {
    it('should work for the base case of 1', function() {
      assert([1].equals(Util.generateCollatzSequence(1)));
    });
    it('should work for normal integer cases', function() {
      assert([13,40,20,10,5,16,8,4,2,1].equals(Util.generateCollatzSequence(13)));
    });
  });
  describe('findCollatzLength()', function() {
    it('should work for 1', function() {
      assert(1, Util.findCollatzLength(1));
    });
    it('should work for known cases', function() {
      assert(9, Util.findCollatzLength(6));
      assert(15, Util.findCollatzLength(11));
    });
  });
  describe('binomial()', function() {
    it('should work for known binomials', function() {
      assert.equal(6, Util.binomial(4, 2));
      assert.equal(10, Util.binomial(5, 3));
    });
  });
  describe('integerToWords()', function() {
    it('should work for single digit numbers', function() {
      assert.equal('zero', Util.integerToWords(0));
      assert.equal('three', Util.integerToWords(3));
      assert.equal('nine', Util.integerToWords(9));
    });
    it('should work for oddly named numbers', function() {
      assert.equal('ten', Util.integerToWords(10));
      assert.equal('eleven', Util.integerToWords(11));
      assert.equal('fourteen', Util.integerToWords(14));
    });
    it('should work for tens', function() {
      assert.equal('twenty', Util.integerToWords(20));
      assert.equal('eighty', Util.integerToWords(80));
    });
    it('should work for tens-ones combos', function() {
      assert.equal('thirty-two', Util.integerToWords(32));
      assert.equal('ninety-nine', Util.integerToWords(99));
    });
    it('should work for hundreds', function() {
      assert.equal('two hundred', Util.integerToWords(200));
      assert.equal('six hundred', Util.integerToWords(600));
    });
    it('should work for hundreds-ones combos', function() {
      assert.equal('three hundred and one', Util.integerToWords(301));
      assert.equal('six hundred and seven', Util.integerToWords(607));
    });
    it('should work for hundreds-tens combos', function() {
      assert.equal('four hundred and thirty', Util.integerToWords(430));
      assert.equal('five hundred and ten', Util.integerToWords(510));
    });
    it('should work for hundreds-tens-ones combos', function() {
      assert.equal('one hundred and eighty-seven', Util.integerToWords(187));
      assert.equal('eight hundred and twelve', Util.integerToWords(812));
    });
    it('should work for thousands', function() {
      assert.equal('one thousand', Util.integerToWords(1000));
      assert.equal('five thousand', Util.integerToWords(5000));
    });
    it('should work for thousands-hundreds combos', function() {
      assert.equal('three thousand one hundred', Util.integerToWords(3100));
      assert.equal('seven thousand two hundred', Util.integerToWords(7200));
    });
    it('should work for four digit numbers', function() {
      assert.equal('eight thousand three hundred and ninety-one', Util.integerToWords(8391));
      assert.equal('two thousand four hundred and thirteen', Util.integerToWords(2413));
    });
    it('should throw an error on unsupported numbers', function() {
      assert.throws(function() { Util.integerToWords(10000); });
    });
  });
});
