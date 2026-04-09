function moveZeros(arr) {
  const results = [];
  const zeros = [];
  for (const element of arr) {
    if (element === 0) zeros.push(element);
    else results.push(element);
  }
  return [...results, ...zeros];
}
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); //  [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
