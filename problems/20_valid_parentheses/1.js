var isValid = function(s) {
  function isYourPar(s) {
    switch(s) {
      case ')':
        return '(';
      case '}':
        return '{';
      case ']':
        return '[';
    }
    return '';
  }
  var stack = [],
      x,
      i = 0;
  while (i < s.length) {
      x = s[i];  
      if (stack.length && isYourPar(x) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(x);
      }
      i++;
  }
  return !stack.length;
};