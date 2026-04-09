function sepStr(strng) {
  strng = strng.split(" ");
  let longestWord = strng.reduce(
    (acc, curr) => (acc.length > curr.length ? acc : curr),
    ""
  );
  let results = Array.from({ length: longestWord.length }, () =>
    Array(strng.length).fill("")
  );
  for (let i = 0; i < longestWord.length; i++) {
    for (let j = 0; j < strng.length; j++) {
      results[i][j] = strng[j][i] || "";
    }
  }
  return results;
}
console.log(sepStr("Just Live Life Man"));
console.log(sepStr("The Mitochondria is the powerhouse of the cell"));
