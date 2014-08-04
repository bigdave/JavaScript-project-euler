function reverseString(s) {
  return s.split("").reverse().join("");
}
module.exports.reverseString = reverseString;

function reverseNumber(n) {
  return Number(reverseString(n.toString()));
}
module.exports.reverseNumber = reverseNumber;

function reverse(original) {
  if(isNaN(original)) {
    return reverseString(original);
  } else {
    return reverseNumber(original);
  }
}
module.exports.reverse = reverse;

function errorIfNotInteger(n) {
  if (n === true || n === false || (n % 1 != 0)) {
    throw 'Must be an integer';
  }
  return n;
}
module.exports.errorIfNotInteger = errorIfNotInteger;

function makeArraysComparable() {
  // attach the .equals method to Array's prototype to call it on any array
  Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array) {
      return false;
    }

    // compare lengths - can save a lot of time
    if (this.length != array.length) {
      return false;
    }

    for (var i = 0, l=this.length; i < l; i++) {
      // Check if we have nested arrays
      if (this[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!this[i].equals(array[i])) {
          return false;
        }
      } else if (this[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  }
}
module.exports.makeArraysComparable = makeArraysComparable;

function isPrime(n) {
  errorIfNotInteger(n);

  // 2 is prime
  if (n == 2) {
    return true;
  }

  // Nothing under 2 is prime
  if (n < 2) {
    return false;
  }

  for (var i = Math.floor(n / 2); i > 1; i--) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
module.exports.isPrime = isPrime;

function nextPrimeAfter(start) {
  var nextPossible;

  if (start % 1 != 0) {
    nextPossible = Math.ceil(start);
  } else if (start % 2 == 0) {
    nextPossible = start + 1;
  } else {
    nextPossible = start + 2;
  }

  while (!isPrime(nextPossible)) {
    nextPossible = nextPossible + 2;
  }

  return nextPossible;
}
module.exports.nextPrimeAfter = nextPrimeAfter;

function isPalindrome(possiblePalindrome) {
  if (possiblePalindrome == reverse(possiblePalindrome)) {
    return true;
  }
  return false;
}
module.exports.isPalindrome = isPalindrome;

function findPrimeFactors(n) {
  errorIfNotInteger(n);

  var current = 2;
  var factors = new Array();
  while (n > 1) {
    if (n % current == 0) {
      factors.push(current);
      n = n / current;
    } else {
      current = nextPrimeAfter(current);
    }
  }
  return factors;
}
module.exports.findPrimeFactors = findPrimeFactors;
