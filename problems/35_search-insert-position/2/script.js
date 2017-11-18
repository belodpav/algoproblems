var searchInsert = function(nums, target) {
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  for (var i = 0; i < nums.length; i++) {
    if (target <= nums[i]) {
      return i;
    }
  }
}