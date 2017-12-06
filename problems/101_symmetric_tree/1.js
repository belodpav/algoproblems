/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function step(left, right) {
        if (left === null || right === null) {
            return left === right;
        }
        
        if (left.val !== right.val) {
            return false;
        }
        return step(left.right, right.left) && step(left.left, right.right);
    }
    return root === null || step(root.left, root.right);
};