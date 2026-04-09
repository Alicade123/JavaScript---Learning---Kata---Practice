function solve(a, b) {
  a = a.split("");
  b = b.split("");

  for (let char of b) {
    const index = a.indexOf(char);
    if (index !== -1) {
      a.splice(index, 1);
    } else {
      return 0;
    }
  }

  return a.length;
}

console.log(solve("xyz", "yxz")); // 0);
console.log(solve("abcxyz", "ayxz")); // 2);
console.log(solve("abcdexyz", "yxz")); // 5);
console.log(solve("axyyz", "yxxz")); // 0);
console.log(solve("abdegfg", "ffdb")); // 0);
console.log(solve("aabcdefg", "fbd")); // 5);
console.log(solve("aabcdefg", "fdb")); // 5);
