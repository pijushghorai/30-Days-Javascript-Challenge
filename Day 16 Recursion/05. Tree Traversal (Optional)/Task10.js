// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function treeDepth(root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = treeDepth(root.left);
  const rightDepth = treeDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const tree1 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(7))),
  new TreeNode(3, new TreeNode(6), new TreeNode(8, new TreeNode(9)))
);

const tree3 = new TreeNode(1);

const tree4 = null;

console.log("Depth of tree1:", treeDepth(tree1));
console.log("Depth of tree2:", treeDepth(tree2));
console.log("Depth of tree3:", treeDepth(tree3));
console.log("Depth of tree4:", treeDepth(tree4));
