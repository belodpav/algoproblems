/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var array = [];
  function addParenthe(str, open, close) {
    if (close === 0) {
      array.push(str);
    }
    if (open < close) addParenthe(str + ')', open, close - 1);
    if (open > 0) addParenthe(str + '(', open - 1, close);
  }
  addParenthe('',n,n);
  return array;
};