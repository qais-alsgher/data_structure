function treeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function towSum(root, target) {
    let obj = {};
    let traverse = (node) => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        obj[node.val] = true;
    }
    traverse(root);
    for (let key in obj) {
        let diff = target - key;
        if (obj[diff]) return true;
    }
    return false;
}

exports.treeNode = treeNode;
exports.towSum = towSum;


