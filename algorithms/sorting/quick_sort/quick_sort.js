/**
 * @param {number[]} a
 * @param {number} p
 * @param {number} r
 * @return {}
 */

function quickSort( a, p, r ) {
  if ( p >= r ) return;
  
  let q;
  q = partition(a, p, r);
  quickSort( a, p, q - 1 );
  quickSort( a, q + 1, r );
  
  return a;
}

/**
 * @param {number[]} a
 * @param {number} p
 * @param {number} r
 * @return {number}
 */
function partition( a, p, r ) {
  let q = p;
  
  for (let i = p; i < r ; i++) {
    if ( a[i] <= a[r] ) {
      swap( a, i, q );
      q++;
    }
  }

  swap( a, q, r );
  return q;
}


/**
 * @param {number[]} a
 * @param {number} x
 * @param {number} y
 */
function swap( a, x, y ) {
  if (x === y) return;
  a[x] = a[x] + a[y];
  a[y] = a[x] - a[y];
  a[x] = a[x] - a[y];
}

// Example of usage
// Notice that quickSort change source array
let nums = [4, 9, 100, 1, -34, 4, 99, 7, 0, 0, -888];
console.log( quickSort( nums, 0, nums.length -1 ) );
