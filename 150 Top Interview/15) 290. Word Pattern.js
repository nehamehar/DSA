var wordPattern = function(pattern, s) {
    let patternArr = pattern.split("");
    let words = s.split(" ");

    if (patternArr.length !== words.length) return false;

    let letterToWord = new Map();
    let wordToLetter = new Map();

    for (let i = 0; i < patternArr.length; i++) {
        let letter = patternArr[i];
        let word = words[i];

        if (letterToWord.has(letter)) {
            if (letterToWord.get(letter) !== word) return false;
        } else {
            if (wordToLetter.has(word)) return false;

            letterToWord.set(letter, word);
            wordToLetter.set(word, letter);
        }
    }

    return true;
};
