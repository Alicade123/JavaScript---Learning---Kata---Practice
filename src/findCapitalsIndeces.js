function capitals(word) {
  const indices = [];
  const arr = word.split("");

  arr.forEach((char, index) => {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      indices.push(index);
    }
  });

  return indices;
}

console.log(capitals("CodEWaRsXX")); // Output: [0, 3, 4, 6, 8, 9]
