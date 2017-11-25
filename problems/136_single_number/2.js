var singleNumber = function(nums) {
  let map = new Map(),
      sum = 0;
  nums.forEach( x => {
    if (map.has(x)) {
      sum -= x;
      map.delete(x);
    } else {
      sum += x;
      map.set(x ,x);
    }
  });
  return sum;
};