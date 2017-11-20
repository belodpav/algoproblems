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
      stackSize = -1,
      parentheses = s.split('');
  parentheses.forEach( x => {
    
    if (stackSize >= 0 && isYourPar(x) === stack[stackSize]) {
      stack.pop();
      stackSize--;
    } else {
      stack.push(x);
      stackSize++;
    }
  });
  return stackSize < 0;
};