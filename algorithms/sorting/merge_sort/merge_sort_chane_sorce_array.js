
/**
 * @param  {number[]} a
 * @param {number} p
 * @param {number} r
 * @return {}
 */
function mergeSort(a, p, r) {
  if (p >= r) return;
  let q;
  q = Math.floor( (p + r) / 2);
  mergeSort(a, p, q);
  mergeSort(a, q + 1, r);
  merge(a, p, q, r);
  return a;
}

/**
 * @param  {number[]} a
 * @param {number} p
 * @param {number} q
 * @param {number} r
 * @return {}
 */
function merge(a, p, q, r) {
  let b = a.slice(p, q + 1);
  let c = a.slice(q + 1, r + 1);
  b.push(Infinity);
  c.push(Infinity);
  for (let k = p, i = 0, j = 0; k <= r; k++) {
    if (b[i] <= c[j]) {
      a[k] = b[i];
      i++;
    } else {
      a[k] = c[j];
      j++;
    }
  }
}


// Example of using 

const nums = [5, 228, 4, 1, -4, 4, -444, 0, 0, -444];

console.log(mergeSort(nums, 0, nums.length - 1));