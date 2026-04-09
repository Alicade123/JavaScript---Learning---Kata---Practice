function solve(arr) {
  const result = [];
  let dominantValue = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > dominantValue) {
      result.push(arr[i]);
      dominantValue = arr[i];
    }
  }

  return result.reverse();
}
console.log(solve([1, 21, 4, 7, 5]));     // [21, 7, 5]
console.log(solve([5, 4, 3, 2, 1]));       // [5, 4, 3, 2, 1]
console.log(solve([]));                   // []
console.log(solve([0]));                  // [0]
console.log(solve([1, 2, 3, 100, 1]));     // [100, 1]
