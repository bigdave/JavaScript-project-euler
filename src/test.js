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
    it('should return false for non-integer numbers', function() {
      assert.equal(false, Util.isPrime(-2.25));
      assert.equal(false, Util.isPrime(3.14159));
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
    it('should return 6857 for the largest prime factor of 600851475143', function() {
      assert.equal(6857, Euler.problem3(600851475143));
    });
  });

  describe('Problem 4 - Largest palindrome product', function() {
    it('should identify 91 * 99 = 9009 as the largest for 2-digit numbers', function() {
      var palindrome = Euler.problem4(2);
      assert.equal(9009, palindrome.number);
      assert([91,99].equals(palindrome.identities));
    });
    it('should identify 913 * 993 = 906609 as the largest for 3-digit numbers', function() {
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
  describe('Problem 9 - Special Pythagorean triplet', function() {
    it('should find the product abc of the triplet a+b+c=1000', function() {
      assert.equal(31875000, Euler.problem9(1000));
    });
  });
  describe('Problem 10 - Summation of primes', function() {
    it('should sum all primes under 10 as 17', function() {
      assert.equal(17, Euler.problem10(10));
    });
    it('should sum all primes under 2,000,000 as 142,913,828,922', function() {
      assert.equal(142913828922, Euler.problem10(2000000));
    });
  });
  describe('Problem 11 - Largest product in a grid', function() {
    it('should work for a grid of 4 and a length of 2', function() {
      var example = [[0, 1, 0, 2],
                     [0, 9, 2, 0],
                     [0, 2, 8, 1],
                     [1, 2, 2, 1]];
      assert.equal(72, Euler.problem11(example, 2));
    });
    it('should work for the Euler problem', function() {
      var example = [[08,02,22,97,38,15,00,40,00,75,04,05,07,78,52,12,50,77,91,08],
                     [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,04,56,62,00],
                     [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,03,49,13,36,65],
                     [52,70,95,23,04,60,11,42,69,24,68,56,01,32,56,71,37,02,36,91],
                     [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
                     [24,47,32,60,99,03,45,02,44,75,33,53,78,36,84,20,35,17,12,50],
                     [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
                     [67,26,20,68,02,62,12,20,95,63,94,39,63,08,40,91,66,49,94,21],
                     [24,55,58,05,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
                     [21,36,23,09,75,00,76,44,20,45,35,14,00,61,33,97,34,31,33,95],
                     [78,17,53,28,22,75,31,67,15,94,03,80,04,62,16,14,09,53,56,92],
                     [16,39,05,42,96,35,31,47,55,58,88,24,00,17,54,24,36,29,85,57],
                     [86,56,00,48,35,71,89,07,05,44,44,37,44,60,21,58,51,54,17,58],
                     [19,80,81,68,05,94,47,69,28,73,92,13,86,52,17,77,04,89,55,40],
                     [04,52,08,83,97,35,99,16,07,97,57,32,16,26,26,79,33,27,98,66],
                     [88,36,68,87,57,62,20,72,03,46,33,67,46,55,12,32,63,93,53,69],
                     [04,42,16,73,38,25,39,11,24,94,72,18,08,46,29,32,40,62,76,36],
                     [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,04,36,16],
                     [20,73,35,29,78,31,90,01,74,31,49,71,48,86,81,16,23,57,05,54],
                     [01,70,54,71,83,51,54,69,16,92,33,48,61,43,52,01,89,19,67,48]];
      assert.equal(70600674, Euler.problem11(example, 4));
    });
  });
});
