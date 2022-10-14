// Write your test here
const { tree } = require('./challenge01');

describe('test challenge 1', () => {
    it('test case 1', () => {
        const result = tree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
        expect(result).toEqual({ "left": { "left": null, "right": null, "val": 9 }, "right": { "left": { "left": null, "right": null, "val": 15 }, "right": { "left": null, "right": null, "val": 7 }, "val": 20 }, "val": 3 });
        // [3,9,20,null,null,15,7]
        expect(result.val).toEqual(3);
        expect(result.left.val).toEqual(9);
        expect(result.left.left).toEqual(null);
        expect(result.left.right).toEqual(null);
        expect(result.right.val).toEqual(20);
        expect(result.right.right.val).toEqual(7);
        expect(result.right.left.val).toEqual(15);
    })

    it('test case 2', () => {
        const result = tree([-1], [-1]);
        expect(result.val).toEqual(-1);
    })
})