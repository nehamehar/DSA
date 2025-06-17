
 //A common prefix is the beginning part of two or more strings that is the same.
function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let first = strs[0]; // Take the first word first = "flower"

    for (let i = 0; i < first.length; i++) {
        let char = first[i]; // character at current index

        for (let j = 1; j < strs.length; j++) {
            // If out of bounds OR mismatch
            if (i >= strs[j].length || strs[j][i] !== char) {
                return first.slice(0, i); // return common prefix up to i
            }
        }
    }

    return first; // All matched, so return full first word
}