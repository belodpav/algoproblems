var longestCommonPrefix = function(strs) {
  let prefix = '',
      result = '';
  if (strs.length === 0) return '';
  for (let i = 0; i < strs[0].length; i++) {
    prefix += strs[0][i];
    for(let j = 1; j < strs.length; j++) {
      if (strs[j].indexOf(prefix) !== 0 || prefix.length > strs[j].length) {
        return result;
      }
    }
    result = prefix;
    
  }
  return prefix;
};