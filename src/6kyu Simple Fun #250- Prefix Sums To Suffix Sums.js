function prefixSumsToSuffixSums(prefixSums) {
  let A = [];
  for (let i = prefixSums.length - 1; i >= 0; i--) {
    if (i === 0) A.push(prefixSums[i]);
    else A.push(prefixSums[i] - prefixSums[i - 1]);
  }
  A = A.reverse();
  let index = 0;
  let suffixSums = [];
  while (index < A.length) {
    let sum = 0;
    for (let j = index; j < A.length; j++) {
      sum += A[j];
    }
    suffixSums.push(sum);
    index++;
  }
  return suffixSums;
}
//[1, 2, 3, 4, 5]
console.log(prefixSumsToSuffixSums([1, 3, 6, 10, 15])); //[15, 14, 12, 9, 5]
console.log(prefixSumsToSuffixSums([0])); //[0]
console.log(prefixSumsToSuffixSums([-1, -2, -3, -4, -5])); //[-5, -4, -3, -2, -1]
console.log(prefixSumsToSuffixSums([1, -4, 2, 90, 100, -1])); //  [-1, -2, 3, -3, -91, -101]
console.log(prefixSumsToSuffixSums([1, 0, 1, 0, 1, 0, 1, 0])); //  [0, -1, 0, -1, 0, -1, 0, -1]
console.log(prefixSumsToSuffixSums([0, 0, 0, 0, 0, 0, 0, 0, 0, 1])); //  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
console.log(prefixSumsToSuffixSums([0, 0, 0, 0, 0, 0, 1, 1, 1, 1])); //  [1, 1, 1, 1, 1, 1, 1, 0, 0, 0]
