var hammingWeight = function(n) {
  const s = n.toString(2);
  return s.split('1').length - 1;
};