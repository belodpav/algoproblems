var leastInterval = function(tasks, n) {
  var startChar = 'A'.charCodeAt(0),
      sorted = new Array(26).fill(0);
  tasks.forEach( task => {
    sorted[task.charCodeAt(0) - startChar]++;
  });
  sorted.sort( (a, b) => b - a );
  var i = 1;
  while (sorted[i] === sorted[0]) i++;
  return Math.max(tasks.length, (n+1)*(sorted[0]-1) + i);
}