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
  }
  return reverseNumber(original);
}
module.exports.reverse = reverse;

function errorIfNotInteger(n) {
  if (n === true || n === false || (n % 1 !== 0)) {
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
    if (this.length !== array.length) {
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
  };
}
module.exports.makeArraysComparable = makeArraysComparable;

function isPrime(n) {
  // 2 is prime
  if (n === 2) {
    return true;
  }

  // Nothing under 2 is prime, even numbers aren't prime
  if (n < 2 || n % 2 === 0 || n % 1 !== 0) {
    return false;
  }

  var limit = Math.floor(Math.sqrt(n) + 1);
  for (var i = 3; i < limit; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
module.exports.isPrime = isPrime;

function nextPrimeAfter(start) {
  var nextPossible;

  if (start % 1 !== 0) {
    nextPossible = Math.ceil(start);
  } else if (start % 2 === 0) {
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
  var factors = [];
  while (n > 1) {
    if (n % current === 0) {
      factors.push(current);
      n = n / current;
    } else {
      current = nextPrimeAfter(current);
    }
  }
  return factors;
}
module.exports.findPrimeFactors = findPrimeFactors;

function findFactors(n) {
  errorIfNotInteger(n);

  var factors = [1];

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }

  if (n != 1) {
    var allFactors = factors;
    for (var j = factors.length; j >= 1; j--) {
      allFactors.push(n/factors[j-1]);
    }
  }

  return factors;
}
module.exports.findFactors = findFactors;

function generateCollatzSequence(n) {
  if (n === 1) {
    return [1];
  } else if (n % 2 === 0) {
    return [n].concat(generateCollatzSequence(n/2));
  } else {
    return [n].concat(generateCollatzSequence(3*n+1));
  }
}
module.exports.generateCollatzSequence = generateCollatzSequence;

function findCollatzLength(n) {
  var length = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = 3*n+1;
    }
    length++;
  }
  return length;
}
module.exports.findCollatzLength = findCollatzLength;

function checkDivisibilityByRange(numerator, min, max) {
  if (min > max) {
    throw 'Minimum parameter must be less than Maximum parameter';
  }
  for (var i = max; i >= min; i--) {
    if (numerator % i !== 0) {
      return false;
    }
  }
  return true;
}
module.exports.checkDivisibilityByRange = checkDivisibilityByRange;

function binomial(n, k) {
    var coeff = 1;
    for (var i = n - k + 1; i <= n; i++) {
      coeff *= i;
    }
    for (var j = 1; j <= k; j++) {
      var result = coeff /= j;
      if (result % 1 !== 0) {
        // Correct for 'exciting' JavaScript floating point math
        coeff = parseFloat(result.toFixed(0));
      } else {
        coeff = result;
      }
    }
    return coeff;
}
module.exports.binomial = binomial;

function sumOfSquares(n) {
  var sum = 0;
  for (var i = n; i > 0; i--) {
    sum += i * i;
  }
  return sum;
}
module.exports.sumOfSquares = sumOfSquares;

function nthTriangleNumber(n) {
  return (n * (n + 1)) / 2;
}
module.exports.nthTriangleNumber = nthTriangleNumber;

function squareOfSums(n) {
  return Math.pow(nthTriangleNumber(n),2);
}
module.exports.squareOfSums = squareOfSums;

function nthPrime(n) {
  if (n === 1) {
    return 2;
  }
  var count = 1;
  var x = 3;
  do {
    if (isPrime(x)) {
      count++;
    }
    if (count === n) {
      return x;
    }

    x += 2;
  } while (true);
}
module.exports.nthPrime = nthPrime;

function integerToWords(n) {
  if (n > 9999) {
    throw 'The number ' + n + ' is too large for words.';
  }

  if (n === 0) {
    return mapDigitToWord(0);
  }

  function mapDigitToWord(n) {
    var numbers =
      ['zero','one','two','three','four','five','six','seven','eight', 'nine'];

    return numbers[n];
  }

  function mapTensDigitToWord(n) {
    var numbers =
      ['','','twenty','thirty','forty','fifty',
      'sixty','seventy','eighty','ninety'];

    return numbers[n];
  }

  function mapTeenNumberToWord(n) {
    var mapping = [];
    mapping[10] = 'ten';
    mapping[11] = 'eleven';
    mapping[12] = 'twelve';
    mapping[13] = 'thirteen';
    mapping[14] = 'fourteen';
    mapping[15] = 'fifteen';
    mapping[16] = 'sixteen';
    mapping[17] = 'seventeen';
    mapping[18] = 'eighteen';
    mapping[19] = 'nineteen';

    return mapping[n];
  }

  var numberInWords = '';

  // Pad the number to a fixed length
  var numberString = String(n);
  while (numberString.length < 4) {
    numberString = '0' + numberString;
  }

  var thousands = numberString.charAt(0);
  var hundreds = numberString.charAt(1);
  var tens = numberString.charAt(2);
  var ones = numberString.charAt(3);

  if (thousands !== '0') {
    numberInWords = mapDigitToWord(thousands) + ' thousand';
  }

  if (hundreds !== '0') {
    if (numberInWords !== '') {
      numberInWords = numberInWords + ' ';
    }
    numberInWords = numberInWords + mapDigitToWord(hundreds) + ' hundred';
  }

  // Pad and 'and' if necessary
  var firstTwoDigits = parseInt(tens+ones);
  if (numberInWords !== '' && firstTwoDigits > 0) {
    numberInWords = numberInWords + ' and ';
  }

  // Deal with oddly named numbers
  if (firstTwoDigits >= 10 && firstTwoDigits <= 19) {
    return numberInWords + mapTeenNumberToWord(firstTwoDigits);
  }

  // Deal with tens-digits
  if (tens != '0') {
    numberInWords = numberInWords + mapTensDigitToWord(parseInt(tens));
  }

  // Add hyphenation for tens/ones combos
  if (tens != '0' && ones != '0') {
    numberInWords = numberInWords + '-';
  }

  // Deal with ones-digits
  if (ones != '0') {
    numberInWords = numberInWords + mapDigitToWord(parseInt(ones));
  }

  return numberInWords;
}
module.exports.integerToWords = integerToWords;
