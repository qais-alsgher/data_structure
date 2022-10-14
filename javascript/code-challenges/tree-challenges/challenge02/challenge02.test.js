// Write your test here
const { tree, EquleTree } = require('./challenge02');

describe('test challenge 2', () => {
    it('test case 1', () => {
        const firstTree = tree([1, 2, 3]);
        const secondTree = tree([1, 2, 3]);
        const result = EquleTree(firstTree, secondTree);
        expect(result).toEqual(true);
    })

    it('test case 2', () => {
        const firstTree = tree([1, 2]);
        const secondTree = tree([1, null, 2]);
        const result = EquleTree(firstTree, secondTree);
        expect(result).toEqual(false);
    })

})