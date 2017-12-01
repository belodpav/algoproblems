var isSameTree = function(p, q) {
  function compare(p, q) {
    if (!p && !q) return true;
    if (!p && q || p && !q) return false;
    if (p.val !== q.val) return false;
    return compare(p.left, q.left) && compare(p.right, q.right);
  }
  return compare(p, q);
};