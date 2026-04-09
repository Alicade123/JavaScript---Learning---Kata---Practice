const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twoMethods = (getarr) => {
  return getarr
    .filter((elements) => elements % 2 === 0)
    .map((evens) => evens ** 2);
};
console.log(twoMethods(arr));

const words = ["apple", "banana", "cherry"];
const theMapApplication = (getWords) => {
  const indexed = getWords.map((word, index) => ({
    id: index,
    name: word,
  }));
  return indexed;
};
console.log(theMapApplication(words));

const stringReduction = (a, b) => {
  a = a.split("");
  b = b.split("");
  for (const char of b) {
    const index = a.indexOf(char);
    if (index !== -1) {
      a.splice(index, 1);
    } else {
      return 0;
    }
  }
  return a.length;
};

console.log(stringReduction("xyz", "yxz")); // 0
console.log(stringReduction("abcxyz", "ayxz")); // 2
console.log(stringReduction("abcdexyz", "yxz")); // 5
console.log(stringReduction("axyyz", "yxxz")); // 0
console.log(stringReduction("abdegfg", "ffdb")); // 0
console.log(stringReduction("aabcdefg", "fbd")); // 5
console.log(stringReduction("aabcdefg", "fdb")); // 5
