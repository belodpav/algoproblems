// while loop. Working faster than with for loop on problem tests
var twoSum = function(nums, target) {
  var map = new Map(),
      x,
      i = 0;
  while(i < nums.length) {
    x = nums[i];
    if (map.has(target - x)) {
      return [map.get(target - x), i]
    }
    map.set(x, i);
    i++;
  } 
};