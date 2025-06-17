var strStr = function(haystack, needle) {
    if (needle === "") return 0; // Edge case: empty needle is always at index 0

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;

        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) return i; // First match found
    }

    return -1; // No match found
};
