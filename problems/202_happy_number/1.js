var isHappy = function(n) {
  let firstFlow, secondFlow;
  firstFlow = secondFlow = n;
    do {
      firstFlow = getSumSqD(getSumSqD(firstFlow));
      secondFlow = getSumSqD(secondFlow);
    } while( secondFlow !== firstFlow);
  return secondFlow === 1 ? true: false;
};

function getSumSqD(n) {
  let s = 0;
  while (n > 0) {
    s += (n % 10)*(n % 10);
    n = Math.floor(n / 10);
  }
  return s;
}