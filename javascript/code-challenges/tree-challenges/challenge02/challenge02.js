function Node(value, left, right) {
    this.value = (value === undefined ? 0 : value);
    this.right = (right === undefined ? null : right);
    this.left = (left === undefined ? null : left);
}

function tree(arr) {
    const node = new Node(arr[0], arr[1], arr[2]);
    return node;
}


function EquleTree(firstT, secondT) {

    if (firstT === undefined && secondT === undefined) return true;
    if (firstT === null && secondT === null) return true;
    if (firstT === null || secondT === null || firstT.value !== secondT.value) return false;

    if (firstT.value === secondT.value) {
        return EquleTree(firstT.left, secondT.left) && EquleTree(firstT.right, secondT.right);
    }
}


module.exports = { EquleTree, tree }

// const firstT = tree([1, 2]);
// const secondT = tree([2, 1]);
// // console.log(secondT);

// console.log(EquleTree(firstT, secondT));