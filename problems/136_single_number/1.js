var singleNumber = function(nums) {
  return nums.reduce( (x, n) => x ^ n);
};