var generate = function(numRows) {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  var a = [[1]];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
      row.push(a[i-1][j] + a[i-1][j-1]);
    }
    row.push(1);
    a.push(row);
  }
  return a;
};