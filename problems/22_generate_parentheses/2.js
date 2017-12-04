/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var result = [];
  
  function generate(stack, str, n) {
    if (stack.length === 0 && str.length === n*2) {
      result.push(str);
      return;
    } else if (str.length >= n*2){
      return;
    }
    generate(addToStack(stack, '('), str + '(', n);
    generate(addToStack(stack, ')'), str + ')', n);
  }
  
  generate([],'',n);
  return result;
};

function addToStack(stack, item) {
  var stack = stack.slice();    
  if (item === ')' && stack[stack.length - 1] === '(') { 
    stack.pop();
  } else {
    stack.push(item);
  }
  return stack;
}