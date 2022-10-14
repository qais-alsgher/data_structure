// Write your test here
const { sortedArrayToBST } = require('./challenge03');

describe('test challenge 3', () => {
    it('test case 1', () => {
        const result = sortedArrayToBST([0, -3, -10, 5, 9]);
        expect(result).toEqual({ "left": { "left": null, "right": { "left": null, "right": null, "value": -3 }, "value": -10 }, "right": { "left": null, "right": { "left": null, "right": null, "value": 9 }, "value": 5 }, "value": 0 });
        // [0,-10,5,null,-3,null,9]
        expect(result.value).toEqual(0);
        expect(result.left.value).toEqual(-10);
        expect(result.left.left).toEqual(null);
        expect(result.left.right.value).toEqual(-3);
        expect(result.right.value).toEqual(5);
        expect(result.right.right.value).toEqual(9);
        expect(result.right.left).toEqual(null);

    })

    it('test case 2', () => {
        const result = sortedArrayToBST([3, 1]);
        // [1,null,3]
        expect(result.value).toEqual(1);
        expect(result.left).toEqual(null);
        expect(result.right.value).toEqual(3);
    })

})