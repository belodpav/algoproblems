var countAndSay = function(n) {
  if (n === 0) return '';
  if (n === 1) return '1';
  
  var prevS = '1';  
  while ( n > 1) {
    prevS = getNextItem(prevS);
    n--;
  }
  return prevS;
};

function getNextItem(prevS) {
  var times = 1,
      s = '';
  for (var i = 1; i <= prevS.length; i++) {
    if (prevS[i] === prevS[i - 1] ) {
      times++;
    } else {
      s += times + prevS[i-1];
      times = 1;
    }
  }
  return s;
}