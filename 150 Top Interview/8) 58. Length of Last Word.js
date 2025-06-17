var lengthOfLastWord = function(s) {
    let words = s.trim(); // removes leading/trailing spaces
  let last = words.split(/\s+/); // splits on any number of spaces
  let lastWord = last[last.length - 1]; // get length of last word
  return lastWord.length;
};