var isPerfectSquare = function(num) {
    var min = 0,
        max = num,
        middle;
  while(min <= max) {
    middle = Math.floor( (min + max) / 2);
    if (middle*middle === num) {
      return true;
    }
    if (middle*middle > num) {
      max = middle - 1; 
    }
    if (middle*middle < num) {
      min = middle + 1;
    }
  }
  return false;
};