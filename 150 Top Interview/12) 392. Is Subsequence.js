var isSubsequence = function(s, t) {
    let m = s.split(""); // split s into characters
    let n = t.split(""); // split t into characters

    let pointer = 0; // index for m (s)

    for (let i = 0; i < n.length; i++) {
        if (n[i] === m[pointer]) {
            pointer++; // move ahead in s if match found
        }
    }

    return pointer === m.length; // all characters in s were found in order
};
