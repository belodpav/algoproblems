var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;
  let maxSum,
      curSum;
  maxSum = curSum = nums[0];
  for( let i = 1; i < nums.length; i++) {
    curSum = Math.max(nums[i], nums[i] + curSum);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
};
