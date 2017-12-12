/**
 *  Title: Merge sort algorithm
 *  Time complexity: O(n*Ln[n])
 */

/**
 * @param  {number[]} a
 * @return {number[]}
 */
function mergeSort( arr ) {
  if ( arr.length < 2 ) return arr; 
  let q, left, right;
  q = Math.floor( arr.length / 2 );
  left = arr.slice( 0, q );
  right = arr.slice( q, arr.length );
  
  return merge( mergeSort( left ), mergeSort( right ) );
  
}

/**
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
function merge( left, right ) {
 let i = 0,
     j = 0,
     a = [],
     len = left.length + right.length;
 left.push( Infinity );
 right.push( Infinity );
 
  for (let u = 0; u < len; u++) {
    if ( left[i] <= right[j] ) {
      a.push( left[i] );
      i++;
    } else {
      a.push( right[j] );
      j++;
    }
  }
  return a;
}
