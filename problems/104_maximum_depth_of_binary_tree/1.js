/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    function treeGoUp(node, depth) {
        if (!node) return 0;
        return Math.max(treeGoUp(node.left), treeGoUp(node.right)) + 1;
    }
    return treeGoUp(root);
};