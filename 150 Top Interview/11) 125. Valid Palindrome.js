
var isPalindrome = function(s) {
    if (s.length===0){ //""
        return true;
    }

    let m = s.toLowerCase();
    //Remove all characters that are not letters or digits.
    let cleaned = m.replace(/[^a-z0-9]/gi, "");
    //Compare string with its reverse
    let reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed) {
    return true;
} else {
    return false;
}

};