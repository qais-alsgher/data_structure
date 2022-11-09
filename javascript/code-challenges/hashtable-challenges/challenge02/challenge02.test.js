const { repeatedWord } = require('./challenge02');

describe('repeatedWord test', () => {
    it('test case 1', () => {
        const result = repeatedWord('ASAC is a department at LTUC. ASAC teaches programming in LTUC.');
        expect(result).toEqual('ASAC');
    })
    it('test case 2', () => {
        const result = repeatedWord("I am learning programming at ASAC.");
        expect(result).toEqual('No Repetition');
    })
});