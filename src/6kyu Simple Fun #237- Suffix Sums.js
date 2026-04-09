function suffixSums(a) {
  let index = 0;
  let b = [];
  while (index < a.length) {
    let sum = 0;
    for (let i = index; i < a.length; i++) {
      sum += a[i];
    }
    b.push(sum);
    index++;
  }
  return b;
}

console.log(suffixSums([1, 2, 3])); //6, 5, 3
console.log(suffixSums([1, 2, 3, -6])); //0, -1, -3, -6
console.log(suffixSums([0, 0, 0])); //0, 0, 0
console.log(suffixSums([1, 123, 23])); //147, 146, 23
