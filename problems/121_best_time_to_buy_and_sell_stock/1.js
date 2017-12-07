/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var minprice = Infinity,
      maxprofit = 0;
  prices.forEach(function(price) {
    minprice = Math.min(minprice, price);
    maxprofit = Math.max(maxprofit, price - minprice);
  });
  return maxprofit;
};