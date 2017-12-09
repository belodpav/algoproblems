/**
 *  Title: Selection sort algorithm
 *  Time complexity: O(n^2)
 */


/**
 * @param  {number[]} a
 * @return {}
*/
function selectionSort(a) {
  let minI;
  
  for (let i = 0; i < a.length; i++) {
    minI = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[minI] >= a[j]) minI = j;
    }
    swap(a, i, minI);
  }
}

// Swap two items in an array
function swap(a, x, y) {
  if (a[x] === a[y]) return;
  a[x] = a[x] ^ a[y];
  a[y] = a[x] ^ a[y];
  a[x] = a[x] ^ a[y];
}