function isOpposite(s1, s2) {
  if (!s1 || !s2) return false;
  if (s1.length !== s2.length) return false;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toLowerCase() !== s2[i].toLowerCase() || s1[i] === s2[i]) {
      return false;
    }
  }

  return true;
}

// Example usage:
console.log(isOpposite("ab", "AB")); // true
console.log(isOpposite("aB", "Ab")); // true
console.log(isOpposite("aBcd", "AbCD")); // true
console.log(isOpposite("AB", "Ab")); // false
console.log(isOpposite("", "")); // false
