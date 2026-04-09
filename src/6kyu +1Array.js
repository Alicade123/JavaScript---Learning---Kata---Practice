function upArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  if (arr.some((el) => el < 0 || el > 9 || !Number.isInteger(el))) return null;

  let result = [...arr];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    } else {
      result[i] = 0;
    }
  }
  result.unshift(1);
  return result;
}
console.log(upArray([4, 3, 2, 5])); // [4,3,2,6]);
console.log(upArray([2, 3, 9, 9])); // [2,4,0,0]);
console.log(upArray([9, 9])); //   [1,0,0]);
console.log(upArray([0, 7])); //     [0,8]);
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
); // [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]);

console.log(upArray([1, -9])); //null
console.log(upArray([1, 10])); //null
console.log(upArray()); //null
