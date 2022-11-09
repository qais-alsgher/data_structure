function repeatedWord(string) {
    let obj = {};
    let letters = string.split(' ');
    obj[letters[0]] = true;

    for (let i = 1; i < letters.length; i++) {
        if (obj[letters[i]]) return letters[i];
        obj[letters[0]] = true;
    }
    return 'No Repetition';
}

exports.repeatedWord = repeatedWord;