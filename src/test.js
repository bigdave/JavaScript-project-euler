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
  describe('binomial()', function() {
    it('should work for known binomials', function() {
      assert.equal(6, Util.binomial(4, 2));
      assert.equal(10, Util.binomial(5, 3));
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
      var example = [[8,2,22,97,38,15,0,40,0,75,4,5,7,78,52,12,50,77,91,8],
                     [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,4,56,62,0],
                     [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65],
                     [52,70,95,23,4,60,11,42,69,24,68,56,1,32,56,71,37,2,36,91],
                     [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
                     [24,47,32,60,99,3,45,2,44,75,33,53,78,36,84,20,35,17,12,50],
                     [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
                     [67,26,20,68,2,62,12,20,95,63,94,39,63,8,40,91,66,49,94,21],
                     [24,55,58,5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
                     [21,36,23,9,75,0,76,44,20,45,35,14,0,61,33,97,34,31,33,95],
                     [78,17,53,28,22,75,31,67,15,94,3,80,4,62,16,14,9,53,56,92],
                     [16,39,5,42,96,35,31,47,55,58,88,24,0,17,54,24,36,29,85,57],
                     [86,56,0,48,35,71,89,7,5,44,44,37,44,60,21,58,51,54,17,58],
                     [19,80,81,68,5,94,47,69,28,73,92,13,86,52,17,77,4,89,55,40],
                     [4,52,8,83,97,35,99,16,7,97,57,32,16,26,26,79,33,27,98,66],
                     [88,36,68,87,57,62,20,72,3,46,33,67,46,55,12,32,63,93,53,69],
                     [4,42,16,73,38,25,39,11,24,94,72,18,8,46,29,32,40,62,76,36],
                     [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,4,36,16],
                     [20,73,35,29,78,31,90,1,74,31,49,71,48,86,81,16,23,57,5,54],
                     [1,70,54,71,83,51,54,69,16,92,33,48,61,43,52,1,89,19,67,48]];
      assert.equal(70600674, Euler.problem11(example, 4));
    });
  });

  describe('Problem 12 - Highly divisible triangular number', function() {
    it('should work for the Euler examples', function() {
      assert.equal(1, Euler.problem12(1));
      assert.equal(3, Euler.problem12(2));
      assert.equal(6, Euler.problem12(3));
      assert.equal(6, Euler.problem12(4));
      assert.equal(28, Euler.problem12(5));
      assert.equal(76576500, Euler.problem12(500));
    });
  });

  describe('Problem 13 - Large sum', function() {
    it('should work for reasonably sized numbers and arrays', function() {
      assert.equal(15, Euler.problem13([1, 2, 3, 4, 5]));
    });
    it('should work for the euler example', function() {
      var example = [37107287533902102798797998220837590246510135740250,
                     46376937677490009712648124896970078050417018260538,
                     74324986199524741059474233309513058123726617309629,
                     91942213363574161572522430563301811072406154908250,
                     23067588207539346171171980310421047513778063246676,
                     89261670696623633820136378418383684178734361726757,
                     28112879812849979408065481931592621691275889832738,
                     44274228917432520321923589422876796487670272189318,
                     47451445736001306439091167216856844588711603153276,
                     70386486105843025439939619828917593665686757934951,
                     62176457141856560629502157223196586755079324193331,
                     64906352462741904929101432445813822663347944758178,
                     92575867718337217661963751590579239728245598838407,
                     58203565325359399008402633568948830189458628227828,
                     80181199384826282014278194139940567587151170094390,
                     35398664372827112653829987240784473053190104293586,
                     86515506006295864861532075273371959191420517255829,
                     71693888707715466499115593487603532921714970056938,
                     54370070576826684624621495650076471787294438377604,
                     53282654108756828443191190634694037855217779295145,
                     36123272525000296071075082563815656710885258350721,
                     45876576172410976447339110607218265236877223636045,
                     17423706905851860660448207621209813287860733969412,
                     81142660418086830619328460811191061556940512689692,
                     51934325451728388641918047049293215058642563049483,
                     62467221648435076201727918039944693004732956340691,
                     15732444386908125794514089057706229429197107928209,
                     55037687525678773091862540744969844508330393682126,
                     18336384825330154686196124348767681297534375946515,
                     80386287592878490201521685554828717201219257766954,
                     78182833757993103614740356856449095527097864797581,
                     16726320100436897842553539920931837441497806860984,
                     48403098129077791799088218795327364475675590848030,
                     87086987551392711854517078544161852424320693150332,
                     59959406895756536782107074926966537676326235447210,
                     69793950679652694742597709739166693763042633987085,
                     41052684708299085211399427365734116182760315001271,
                     65378607361501080857009149939512557028198746004375,
                     35829035317434717326932123578154982629742552737307,
                     94953759765105305946966067683156574377167401875275,
                     88902802571733229619176668713819931811048770190271,
                     25267680276078003013678680992525463401061632866526,
                     36270218540497705585629946580636237993140746255962,
                     24074486908231174977792365466257246923322810917141,
                     91430288197103288597806669760892938638285025333403,
                     34413065578016127815921815005561868836468420090470,
                     23053081172816430487623791969842487255036638784583,
                     11487696932154902810424020138335124462181441773470,
                     63783299490636259666498587618221225225512486764533,
                     67720186971698544312419572409913959008952310058822,
                     95548255300263520781532296796249481641953868218774,
                     76085327132285723110424803456124867697064507995236,
                     37774242535411291684276865538926205024910326572967,
                     23701913275725675285653248258265463092207058596522,
                     29798860272258331913126375147341994889534765745501,
                     18495701454879288984856827726077713721403798879715,
                     38298203783031473527721580348144513491373226651381,
                     34829543829199918180278916522431027392251122869539,
                     40957953066405232632538044100059654939159879593635,
                     29746152185502371307642255121183693803580388584903,
                     41698116222072977186158236678424689157993532961922,
                     62467957194401269043877107275048102390895523597457,
                     23189706772547915061505504953922979530901129967519,
                     86188088225875314529584099251203829009407770775672,
                     11306739708304724483816533873502340845647058077308,
                     82959174767140363198008187129011875491310547126581,
                     97623331044818386269515456334926366572897563400500,
                     42846280183517070527831839425882145521227251250327,
                     55121603546981200581762165212827652751691296897789,
                     32238195734329339946437501907836945765883352399886,
                     75506164965184775180738168837861091527357929701337,
                     62177842752192623401942399639168044983993173312731,
                     32924185707147349566916674687634660915035914677504,
                     99518671430235219628894890102423325116913619626622,
                     73267460800591547471830798392868535206946944540724,
                     76841822524674417161514036427982273348055556214818,
                     97142617910342598647204516893989422179826088076852,
                     87783646182799346313767754307809363333018982642090,
                     10848802521674670883215120185883543223812876952786,
                     71329612474782464538636993009049310363619763878039,
                     62184073572399794223406235393808339651327408011116,
                     66627891981488087797941876876144230030984490851411,
                     60661826293682836764744779239180335110989069790714,
                     85786944089552990653640447425576083659976645795096,
                     66024396409905389607120198219976047599490197230297,
                     64913982680032973156037120041377903785566085089252,
                     16730939319872750275468906903707539413042652315011,
                     94809377245048795150954100921645863754710598436791,
                     78639167021187492431995700641917969777599028300699,
                     15368713711936614952811305876380278410754449733078,
                     40789923115535562561142322423255033685442488917353,
                     44889911501440648020369068063960672322193204149535,
                     41503128880339536053299340368006977710650566631954,
                     81234880673210146739058568557934581403627822703280,
                     82616570773948327592232845941706525094512325230608,
                     22918802058777319719839450180888072429661980811197,
                     77158542502016545090413245809786882778948721859617,
                     72107838435069186155435662884062257473692284509516,
                     20849603980134001723930671666823555245252804609722,
                     53503534226472524250874054075591789781264330331690]
      assert("5537376230", Euler.problem13(example));
    });
  });

  describe('Problem 14 - Longest Collatz sequence', function() {
    it('should determine the number with the longest sequence', function() {
      assert.equal(837799, Euler.problem14(1000000));
    });
  });

  describe('Problem 15 - Lattice paths', function() {
    it('should work for a 20x20 grid', function() {
      assert.equal(137846528820, Euler.problem15(20));
    });
  })
});
