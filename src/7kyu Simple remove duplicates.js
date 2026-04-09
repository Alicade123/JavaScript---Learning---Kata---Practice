function solve(arr) {
  let seen = new Set();
  let result = [];

  // Traverse from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!seen.has(arr[i])) {
      seen.add(arr[i]);
      result.unshift(arr[i]); // Insert at the beginning
    }
  }

  return result;
}

console.log(solve([3, 4, 4, 3, 6, 3]));
