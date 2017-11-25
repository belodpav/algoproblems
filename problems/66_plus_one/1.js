var plusOne = function(digits) {
  let answer = [],
      buf = 1,
      x;
  for (let i = digits.length-1; i >= 0; i--) {
    x = (digits[i] + buf) % 10;
    buf = digits[i] + buf > 9 ? 1 : 0;
    answer.push(x);
  }
  if (buf !== 0) answer.push(1);
  return answer.reverse();
};