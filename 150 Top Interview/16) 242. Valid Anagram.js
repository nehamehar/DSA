function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  // Count characters in string `s`
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    count[char] = (count[char] || 0) + 1;
  }

  // Subtract character count using string `t`
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!count[char]) {
      return false; // char not found or count went below zero
    }
    count[char]--;
  }

  return true;
}
