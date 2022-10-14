// Write here the code challenge solution
function Node(value, left, right) {
    this.value = (value === undefined ? 0 : value);
    this.right = (right === undefined ? null : right);
    this.left = (left === undefined ? null : left);
}

var sortedArrayToBST = function (nums) {

    return BTS(nums);
};


function BTS(nums) {

    const mumberSorted = nums.sort();
    const mid = Math.floor((mumberSorted.length - 1) / 2);
    const node = new Node(mumberSorted[mid]);
    const leftTree = mumberSorted.slice(0, mid);
    const rightTree = mumberSorted.slice(mid + 1);

    if (leftTree.length > 1) {
        node.left = sortedArrayToBST(leftTree);
    } else if (leftTree[0] || leftTree[0] === 0) {
        console.log(leftTree[0]);
        node.left = new Node(leftTree[0]);
    }
    if (rightTree.length > 1) {
        node.right = sortedArrayToBST(rightTree);
    } else if (rightTree[0] || rightTree[0] === 0) {
        node.right = new Node(rightTree[0]);
    }

    return node;

}


exports.sortedArrayToBST = sortedArrayToBST;