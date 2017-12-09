/**
 *  Title: Insertion sort algorithm
 *  Time complexity: O(n^2)
 */

/**
 * @param  {number[]} a
 * @return {}
 */
function insertionSort(a) {
  var key;
  for (let i = 1; i < a.length; i++) {
    key = a[i];
    for (var j = i - 1; j >= 0 && key < a[j]; j--) {
        a[j + 1] = a[j];
    }
    a[j + 1] = key;
  }
}

