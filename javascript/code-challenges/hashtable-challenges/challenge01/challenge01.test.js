const { towSum, treeNode } = require('./challenge01');

describe('test tow sum', () => {

    it('test case 1', () => {
        // [7,2,9,1,5,null,14]
        let root = new treeNode(7);
        root.left = new treeNode(2);
        root.right = new treeNode(9);
        root.left.left = new treeNode(1);
        root.left.right = new treeNode(5);
        root.right.right = new treeNode(14);

        expect(towSum(root, 3)).toEqual(true);
        expect(towSum(root, 4)).toBeTruthy();
        expect(towSum(root, 15)).toBeTruthy();
        expect(towSum(root, 11)).toBeTruthy();
        expect(towSum(root, 20)).toBeFalsy();
    })
})
