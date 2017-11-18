var searchInsert = function(nums, target) {
  var left = 0,
      right = nums.length - 1,
      middle;
  while(left <= right) {
    middle = Math.floor( (left + right) / 2 );
    if (target === nums[middle]) {
      return middle;
    }
    if (target < nums[middle]) {
      right = middle - 1;
    }
    if (target > nums[middle]) {
      left = middle + 1;
    }
  }
  return left;
};