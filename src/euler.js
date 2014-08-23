var Util = require('./util');

/* Problem 1 - Multiples of 3 and 5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
 * 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
module.exports.problem1 = function(limit) {
  var sum = 0;
  for (var i = 3; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

/*
 * Problem 2 - Even Fibonacci numbers
 * Each new term in the Fibonacci sequence is generated by adding the previous
 * two terms. By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *
 * By considering the terms in the Fibonacci sequence whose values do not exceed
 * four million, find the sum of the even-valued terms.
 */
module.exports.problem2 = function(limit) {
  var sum = 0;
  var last = 1;
  for (current = 2; current < limit; /* Incremented below */) {
    if (current % 2 === 0) {
      sum += current;
    }
    current = last + current;
    last = current - last;
  }
  return sum;
};

/*
 * Problem 3 - Largest prime factor
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */
module.exports.problem3 = function(n) {
  var factors = Util.findPrimeFactors(n);
  return factors.pop();
};

/*
 * Problem 4 - Largest palindrome product
 * A palindromic number reads the same both ways. The largest palindrome made
 * from the product of two 2-digit numbers is 9009 = 91 × 99.
 *
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */
module.exports.problem4 = function(n) {
  var LARGEST_n_DIGIT_NUMBER = (Math.pow(10,n))-1;

  // Setup the object to compare against for found palindromes
  var largestPalindrome = {};
  largestPalindrome.number = 0;

  for (var r = LARGEST_n_DIGIT_NUMBER; r > 0; r--) {
    for (var c = LARGEST_n_DIGIT_NUMBER; c >= r; c--) {
      if (Util.isPalindrome(r*c) && (r*c > largestPalindrome.number)) {
        largestPalindrome.number = r*c;
        largestPalindrome.identities = [r,c];
      }
    }
  }

  return largestPalindrome;
};

/*
 * Problem 5 - Smallest multiple
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 *
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */
module.exports.problem5 = function(n) {
  var UPPER_BOUND = n;

  // Base cases
  if (n < 3) {
    return n;
  }

  for (var possibility = n; true; possibility += n) {
    if (Util.checkDivisibilityByRange(possibility, 2, n)) {
      return possibility;
    }
  }
}

/*
 * Problem 6 - Sum square difference
 * The sum of the squares of the first ten natural numbers is,
 * 12 + 22 + ... + 102 = 385
 *
 * The square of the sum of the first ten natural numbers is,
 * (1 + 2 + ... + 10)2 = 552 = 3025
 *
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 *
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 *
 * n is the number of natural numbers to be summed and differenced
 */
module.exports.problem6 = function(n) {
  var sumOfSquares = Util.sumOfSquares(n);
  var squareOfSums = Util.squareOfSums(n);
  return squareOfSums - sumOfSquares;
}

/*
 * Problem 7 - 10001st prime
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 *
 * What is the 10 001st prime number?
 */
module.exports.problem7 = function(n) {
  return Util.nthPrime(n);
}

/*
 * Problem 8 - Largest product in a series
 * The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.
 * 731671765313306249192...9989...3257530420752963450
 * Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?
 */
module.exports.problem8 = function(string, n) {
  var max = 0;
  for (var i = 0; i <= (string.length - n); i++) {
    var slice = string.substr(i,n).split('');
    var product = 1;
    slice.forEach(function(num) {
      product *= num;
    });
    if (product > max) {
      max = product;
    }
  }
  return max;
}

/*
 * Problem 9 - Special pythagorean triplet
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 *
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */
module.exports.problem9 = function(sum) {
  for (var a = 1; a < sum; a++) {
    for (var b = 1; b < sum; b++) {
      var c = Math.sqrt(a*a+b*b);
      if ((c % 1 === 0) && (a+b+c === 1000)) {
        return a*b*c;
      }
    }
  }
}

/*
 * Problem 10 - Summation of primes
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 *
 * Find the sum of all the primes below two million.
 */
module.exports.problem10 = function(limit) {
  var sum = 10;

  for (var i = 7; i < limit; i += 2) {
    // Skip checking isPrime for multiples of 3 or 5, seive style
    if (i % 3 === 0 || i % 5 === 0) {
      continue;
    }

    if (Util.isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

/*
 * Problem 11 - Largest product in a grid
 * ... What is the greatest product of four adjacent numbers in the same
 * direction (up, down, left, right, or diagonally) in the 20×20 grid?
 */
module.exports.problem11 = function(dataset, length) {
  
}
