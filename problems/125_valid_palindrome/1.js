var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/\W/g,'');
  for (var i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }  
  return true;
};