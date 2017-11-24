var addBinary = function(a, b) {
  if (a.length >= b.length) {
    b = '0'.repeat(a.length - b.length) + b;
  } else {
    a = '0'.repeat(b.length - a.length) + a;
  }
  var sum = '',
      buf = '0';

  for (var i = a.length - 1; i >= 0; i--) {
    sum = (a[i] ^ b[i] ^ buf) + sum;
    buf = buf === '0' ? '' + (a[i] & b[i]) : '' + (a[i] | b[i] & buf);
  }
  sum = buf === '1' ? '1' + sum : sum;
  
  return sum;
  
};