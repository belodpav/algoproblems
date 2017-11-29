var climbStairs = function(n) {
  var a, b, c;
  if (n === 1) return 1;
  if (n === 2) return 2;
  a = 0;
  b = 1;
  c = 2;
  for (var i = 3; i <= n; i++) {
    a = b;
    b = c;
    c = a + b; 
  }
  return c;
};
