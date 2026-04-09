function count(string) {
  string = string.toLowerCase();
  let results = new Map();
  for (let i = 0; i < string.length; i++) {
    if (!results.has(string.charAt(i))) {
      results.set(string.charAt(i), 1);
    } else {
      results.set(string.charAt(i), results.get(string.charAt(i)) + 1);
    }
  }

 return Object.fromEntries(results);
}

console.log(count("Alicade"));
console.log(count(""));
console.log(count("hghghghghghghghghg"));
