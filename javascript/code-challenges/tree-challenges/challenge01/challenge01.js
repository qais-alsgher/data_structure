// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function Node(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


function tree(preOrder, inOrder) {

    const rootIndex = inOrder.indexOf(preOrder[0]);
    const rightRoot = inOrder.splice(rootIndex + 1);
    const leftRoot = inOrder.splice(0, rootIndex);
    let node = new Node(preOrder[0]);



    if (leftRoot.length > 1) {
        node.left = tree(preOrder.splice(1, leftRoot.length), leftRoot);
    } else {
        node.left = new Node(leftRoot[0]);

    }

    if (rightRoot.length > 1) {
        node.right = tree(preOrder.splice(leftRoot.length + 1), rightRoot)
    } else {
        node.right = new Node(rightRoot[0]);
    }
    return node;
}

exports.tree = tree;



