var twoSum = function(nums, target) {
  var map = new Map(),
      x;
  for( let i = 0; i < nums.length; i++) {
    x = nums[i];
    if (map.has(target - x)) {
      return [map.get(target - x), i]
    }
    map.set(x, i);
  } 
};