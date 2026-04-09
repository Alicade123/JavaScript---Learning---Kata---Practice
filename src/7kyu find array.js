function findArray(arr1, arr2) {
  if (!arr1.length || !arr2.length) return [];

  return arr2
    .filter((index) => index < arr1.length)
    .map((index) => arr1[index]);
}
console.log(findArray(["a", "b", "c", "d"], [2, 2, 2]));
