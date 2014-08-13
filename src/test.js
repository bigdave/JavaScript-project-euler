var assert = require('assert');

var Util = require('./util');
Util.makeArraysComparable();

var Euler = require('./euler');

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
    it('should throw an exception for non-integers', function() {
      assert.throws(function() { Util.isPrime(3.14159); });
      assert.throws(function() { Util.isPrime(-2.25); });
    });
  });
  describe('findPrimeFactors()', function() {
    it('should return 7 for 7', function() {
      //assert.equal([7], Util.findPrimeFactors(7));
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
});

/* For full problem descriptions, see euler.js */
describe('euler.js', function() {
  describe('Problem 1 - Multiples of 3 and 5', function() {
    it('should return 23 for the sum of multiples of 3 and 5 less than 10', function() {
      assert.equal(23, Euler.problem1(10));
    });
    it('should return 233168 for the sum of multiples of 3 and 5 less than 1000', function() {
      assert.equal(233168, Euler.problem1(1000));
    });
  });

  describe('Problem 2 - Even Fibonacci numbers', function() {
    it('should return 4613732 for the sum of fibonacci numbers under 4,000,000', function() {
      assert.equal(4613732, Euler.problem2(4000000));
    });
  });

  describe('Problem 3 - Largest prime factor', function() {
    it('should return 29 for the largest prime factor of 13195', function() {
      assert.equal(29, Euler.problem3(13195));
    });
    it('should return x for the largest prime factor of 600851475143', function() {
      assert.equal(6857, Euler.problem3(600851475143));
    });
  });

  describe('Problem 4 - Largest palindrome product', function() {
    it('should identify 91 * 99 = 9009 as the largest for 2-digit numbers', function() {
      var palindrome = Euler.problem4(2);
      assert.equal(9009, palindrome.number);
      assert([91,99].equals(palindrome.identities));
    });
    it('should identify x * y = 906609 as the largest for 3-digit numbers', function() {
      var palindrome = Euler.problem4(3);
      assert.equal(906609, palindrome.number);
      assert([913,993].equals(palindrome.identities));
    });
  });

  describe('Problem 5 - Smallest multiple', function() {
    it('should identify 2 as the smallest multiple from 1 to 2', function() {
      assert.equal(2, Euler.problem5(2));
    });
    it('should identify 6 as the smallest multiple from 1 to 3', function() {
      assert.equal(6, Euler.problem5(3));
    });
    it('should identify 2520 as the smallest multiple from 1 to 10', function() {
      assert.equal(2520, Euler.problem5(10));
    });
    it('should identify 232792560 as the smallest multiple from 1 to 20', function() {
      assert.equal(232792560, Euler.problem5(20));
    });
  });

  describe('Problem 6 - Sum square difference', function() {
    it('should identify 2640 for 10', function() {
      assert.equal(2640, Euler.problem6(10));
    });
    it('should identify 25164150 for 100', function() {
      assert.equal(25164150, Euler.problem6(100));
    });
  });

  describe('Problem 7 - 10001st prime', function() {
    this.timeout(10000); // It takes a while to find this
    it('should identify 104743 as the 10001st prime', function() {
      assert.equal(104743, Euler.problem7(10001));
    });
  });

  describe('Problem 8 - Largest product in a series', function() {
    var example = '73167176531330624919225119674426574742355349194934'+
                  '96983520312774506326239578318016984801869478851843'+
                  '85861560789112949495459501737958331952853208805511'+
                  '12540698747158523863050715693290963295227443043557'+
                  '66896648950445244523161731856403098711121722383113'+
                  '62229893423380308135336276614282806444486645238749'+
                  '30358907296290491560440772390713810515859307960866'+
                  '70172427121883998797908792274921901699720888093776'+
                  '65727333001053367881220235421809751254540594752243'+
                  '52584907711670556013604839586446706324415722155397'+
                  '53697817977846174064955149290862569321978468622482'+
                  '83972241375657056057490261407972968652414535100474'+
                  '82166370484403199890008895243450658541227588666881'+
                  '16427171479924442928230863465674813919123162824586'+
                  '17866458359124566529476545682848912883142607690042'+
                  '24219022671055626321111109370544217506941658960408'+
                  '07198403850962455444362981230987879927244284909188'+
                  '84580156166097919133875499200524063689912560717606'+
                  '05886116467109405077541002256983155200055935729725'+
                  '71636269561882670428252483600823257530420752963450';
    it('should work given the Euler example', function() {
      assert.equal(5832, Euler.problem8(example, 4));
    });
    it('should work regardless of the bounds of occurrence', function() {
      assert.equal(729, Euler.problem8("999123456", 3));
      assert.equal(729, Euler.problem8("123456999", 3));
      assert.equal(729, Euler.problem8("123999456", 3));
    });
    it('should solve for the Euler problem', function() {
      assert.equal(23514624000, Euler.problem8(example, 13));
    });
  });
});
