var mySqrt = function(x) {
  if (x === 0) return 0;
  var min = 1,
      max = x,
      middle;
  while (min <= max) {
    middle = (min + max) / 2;
    if (Math.floor(middle*middle) === x) return Math.floor(middle);
    if (Math.floor(middle*middle) < x) min = middle;
    if (Math.floor(middle*middle) > x) max = middle;
  }
  return Math.floor(min);  
};