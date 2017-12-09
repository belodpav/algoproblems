/**
 *  Title: Insertion sort algorithm
 *  Time complexity: O(n^2)
 */

/**
 * @param  {number[]} a
 * @return {}
 */
function insertionSort(a) {
  for (let i = 1; i < a.length; i++) {
    for (let j = i; j > 0 && a[j] < a[j-1]; j--) {
        swap(a, j - 1, j);
    }
  }
}

// Swap two items in an array
/**
 * @param  {number[]} a
 * @param  {number} x
 * @param  {number} y
 * @return {}
*/

function swap(a, x, y) {
  if (a[x] === a[y]) return;
  a[x] = a[x] ^ a[y];
  a[y] = a[x] ^ a[y];
  a[x] = a[x] ^ a[y];
}