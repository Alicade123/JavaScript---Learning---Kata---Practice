function Merge_Sort(arr1, arr2) {
  let arr3 = [...arr1, ...arr2];
  return [...new Set(arr3)].sort((a, b) => a - b);
}
console.log(Merge_Sort([10, 11, 22, 34], [0, 99, 0, 73, 0, 10, 11, 22]));
