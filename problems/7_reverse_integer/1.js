var reverse = function(x) {
  var sign = x < 0 ? -1 : 1,
      n = 0;
  x *=sign;
  while(x > 0 ) {
    n = n*10 + x % 10;
    x = (x * 0.1)^0;
  }
  return n > 2147483647 || n < -2147483648 ? 0 : sign*n;
};