function matrixfy(str) {
  if (str.length === 0) return "name must be at least one letter";
  if (str.length === 1) return [[str]];
  const n = Math.ceil(Math.sqrt(str.length));

  const matrix = Array.from({ length: n }, function () {
    return Array(n).fill(".");
  });
  for (let i = 0; i < str.length; i++) {
    matrix[Math.floor(i / n)][i % n] = str[i];
  }
  return matrix;
}
console.log(matrixfy("")); // "name must be at least one letter");
console.log(matrixfy("G")); // [["G"]]);
console.log(matrixfy("Beyonce"));
/* [
  ["B", "e", "y"],
  ["o", "n", "c"],
  ["e", ".", "."],
]);*/
console.log(matrixfy("Bill"));
/* [
  ["B", "i"],
  ["l", "l"],
]);*/
console.log(matrixfy("Frank"));
/* [
  ["F", "r", "a"],
  ["n", "k", "."],
  [".", ".", "."],
]);*/
