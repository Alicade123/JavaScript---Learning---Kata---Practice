function encode(string) {
  const obj = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let results = "";
  for (let char of string) {
    if (obj[char]) {
      results = results + obj[char];
    } else results = results + char;
  }
  return results;
}

function decode(string) {
  const obj = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  let results = "";
  for (let char of string) {
    if (obj[char]) {
      results = results + obj[char];
    } else results = results + char;
  }
  return results;
}
console.log(encode("h2ll4"));
console.log(decode("h2ll4"));
