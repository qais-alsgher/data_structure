function addNumber(root) {
    if (!root) return root;


    root.val % 2 == 0 ? root.val = (root.val + 1) : root.val = (root.val + 2);

    if (root.left) {
        addNumber(root.left);
    }
    if (root.right) {
        addNumber(root.right);
    }

    return root;
}