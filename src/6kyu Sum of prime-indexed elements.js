function total(arr) {
  let index = 2;
  let sum = 0;
  while (index < arr.length) {
    let counter = 0;
    for (let i = 2; i < index; i++) {
      if (index % i === 0) counter++;
    }
    if (counter === 0) sum += arr[index];
    index++;
  }
  return sum;
}

console.log(total([])); // 0);
console.log(total([1, 2, 3, 4])); // 7);
console.log(total([1, 2, 3, 4, 5, 6])); // 13);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8])); // 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // 33);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // 47);
