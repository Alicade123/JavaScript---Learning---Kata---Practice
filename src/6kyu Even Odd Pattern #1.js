function EvenOdd(arr) {
  if (arr.length === 1) return arr;
  let results = arr.splice(0, 1);
  let count = 1;
  arr.map((x) => {
    if (count % 2 !== 0) results *= x;
    else results += x;
    count++;
  });
  return results;
}
console.log(EvenOdd([1, 2, 6, 1, 6, 3, 1, 9, 6])); // 393
console.log(EvenOdd([1, 2, 3])); //   5
console.log(EvenOdd([0, 2, 3])); //   3
console.log(EvenOdd([1, 0, 3])); //   3
console.log(EvenOdd([3, 2])); //   6
