var leastInterval = function(tasks, n) {
  var charCodeStart = 'A'.charCodeAt(0),
      sorted = new Array(26).fill(0),
      i = 0,
      time = 0;
 
  tasks.forEach( task => {
    sorted[task.charCodeAt(0) - charCodeStart]++;
  });
  sorted.sort( (a, b) => b - a);
  
  while (sorted[0] > 0) {
    i = 0;
    while (i <= n) {
      if (sorted[0] === 0) break;
      if (i < 26 && sorted[i] > 0) sorted[i]--;
      i++;
      time++;
    }
    sorted.sort( (a, b) => b - a);
  }
  return time;
};