function nthSmallest(...args) {
  const n = args.pop(); // last arg is n
  const merged = args
    .flat(args.length) // merge all arrays
    .sort((a, b) => a - b);
  return merged[n - 1];
}

console.log(nthSmallest([[2, 4, 6, 8, 10, 12]], 5)); // 10
console.log(nthSmallest([[2, 2, 2, 2, 2]], 3)); // 2
console.log(
  nthSmallest(
    [
      [2, 8, 12],
      [4, 6, 10],
    ],
    5
  )
); //10
console.log(nthSmallest([[1, 5], [2], [4, 8, 9]], 4)); // 5
console.log(nthSmallest([[1], [2], [3], [4], [5, 6, 7, 8], [9], [10]], 7)); // 7
