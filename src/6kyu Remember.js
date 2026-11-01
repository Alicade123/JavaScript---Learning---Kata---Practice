function remember(str) {
  let results = [];
  const occ = new Map();
  for (let i = 0; i < str.split("").length; i++) {
    if (occ.has(str[i])) {
      results.push(str[i]);
    } else occ.set(str[i], 1);
  }
  return [...new Set(results)];
}

//Test Data
console.log(remember("HTsC  buyi 2"));
console.log(remember("apple")); // ["p"]
console.log(remember("limbojackassin the garden")); // ["a","s","i"," ","e","n"]
console.log(remember("11pinguin")); // ["1", "i", "n"]
console.log(remember("Claustrophobic")); // ["o"]
console.log(remember("apPle")); // []
console.log(remember("11 pinguin")); // ["1","i","n"]
console.log(remember("Pippi")); // ["p","i"]
console.log(remember("kamehameha")); // ["a","m","e","h"]
console.log(remember("")); // []
