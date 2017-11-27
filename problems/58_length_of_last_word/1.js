var lengthOfLastWord = function(s) {
  let words = s.trim().split(' ');
  if (words.length) {
    return words[words.length - 1].length;
  }
  return 0;
};