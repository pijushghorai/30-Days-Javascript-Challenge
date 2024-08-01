// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversal(root) {
  if (root === null) {
    return;
  }

  inOrderTraversal(root.left);

  console.log(root.value);

  inOrderTraversal(root.right);
}

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6))
);

console.log("In-order traversal of the binary tree:");
inOrderTraversal(tree);
