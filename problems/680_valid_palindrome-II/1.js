var validPalindrome = function(s) {
  let middle = Math.floor(s.length / 2);
  for (var i = 0; i < middle; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return isValidPRange(s, i + 1, s.length - 1 - i) ||
             isValidPRange(s, i, s.length - 2 - i);
    }
  }
  return true;
};
function isValidPRange(s, start, end) {
  console.log(start,end);
    while (start < end) {
      if (s[start] !== s[end]) return false;
      start++;
      end--;
    }
    return true;
}