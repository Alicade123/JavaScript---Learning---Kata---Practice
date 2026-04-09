function solve(a, b) {
  let count = 0;
  a = a.split("");
  b = b.split("");

  if (b.length > a.length) {
    return 0;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (b.includes(a[i])) {
        continue;
      } else {
        count++;
      }
    }
  }

  return count;
}
console.log(solve("xyz", "yxz")); // 0);
console.log(solve("abcxyz", "ayxz")); // 2);
console.log(solve("abcdexyz", "yxz")); // 5);
console.log(solve("aabcdefg", "fbd")); // 5);
console.log(solve("aabcdefg", "fdb")); // 5);
