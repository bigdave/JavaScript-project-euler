module.exports.problem1 = function(limit) {
  var sum = 0;
  for (var i = 3; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
