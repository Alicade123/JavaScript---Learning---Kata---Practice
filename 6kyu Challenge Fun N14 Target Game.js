function targetGame(vals) {
  if (!vals || vals.length === 0) return 0;

  let prevMax = 0;
  let currMax = 0;

  for (let val of vals) {
    let currentVal = Math.max(0, val);
    let nextMax = Math.max(currMax, prevMax + currentVal);
    prevMax = currMax;
    currMax = nextMax;
  }

  return currMax;
}

console.log(targetGame([1, 2, 3, 4])); // 6
console.log(targetGame([1, 3, 1])); // 3
console.log(targetGame([5, 5, 5, 5, 5])); // 15
console.log(targetGame([36, 42, 93, 29, 0, 33, 15, 84, 14, 24, 81, 11])); //  327
console.log(targetGame([73, 80, 40, 86, 14, 96, 10, 56, 61, 84, 82, 36, 85])); //  490
console.log(targetGame([11, 82, 47, 48, 80, 35, 73, 99, 86, 32, 32])); //  353
// console.log(targetGame([    26, 54, 36, 35, 63, 58, 31, 80, 59, 61, 34, 54, 62, 73, 89, 7, 98, 91, 78])); //615
//Edge case..
console.log(targetGame([0, 0, -1, -1])); // 0
console.log(targetGame([1, 0, 0, 1])); // 2
console.log(targetGame([5, -2, -9, -4])); // 5
