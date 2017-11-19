var findRadius = function(houses, heaters) {
  function binarySearch(a, target) {
    var min = 0,
    max = a.length - 1,
    middle;
    while (min <= max) {
      middle = Math.floor( (min + max) / 2);
      if (target === a[middle]) return middle;
      if (target < a[middle]) max = middle - 1;
      if (target > a[middle]) min = middle + 1;
    }
    return min;
  }
  heaters = heaters.sort( (a, b) => a - b );
  var index;
  var minR = 0;
  var d = 0;
  var i = 0;
  while(i < houses.length) {
    index = binarySearch(heaters, houses[i]);
    if (index === 0) d = Math.max(heaters[index] - houses[i], 0);
    else if (index === heaters.length) d = Math.max(houses[i] - heaters[index-1], 0);
    else d = Math.min(houses[i] - heaters[index - 1], heaters[index] - houses[i]);
    minR = Math.max(d, minR);
    i++;
  }
  return minR;
};
