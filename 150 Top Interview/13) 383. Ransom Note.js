function canConstruct(ransomNote, magazine) {
    let magazineArr = magazine.split("");
    let ransomArr = ransomNote.split("");

    for (let i = 0; i < ransomArr.length; i++) {
        let found = false;

        for (let j = 0; j < magazineArr.length; j++) {
            if (ransomArr[i] === magazineArr[j]) {
                magazineArr.splice(j, 1); // remove letter so it's used only once
                found = true;
                break;
            }
        }

        if (!found) return false; // letter not found
    }

    return true;
}
