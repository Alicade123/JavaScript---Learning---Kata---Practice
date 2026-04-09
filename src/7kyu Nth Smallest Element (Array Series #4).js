function nthSmallest(arr, pos) {
  arr = arr.sort((a, b) => a - b);
  return arr[pos - 1];
}

console.log(nthSmallest([3, 1, 2], 2)); //2
console.log(nthSmallest([15, 20, 7, 10, 4, 3], 3)); // 7
console.log(nthSmallest([-5, -1, -6, -18], 4)); // -1
console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5)); //-2
console.log(nthSmallest([2, 169, 13, -5, 0, -1], 4)); // 2
console.log(nthSmallest([2, 1, 3, 3, 1, 2], 3)); // 2
