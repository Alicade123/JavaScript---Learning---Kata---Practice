function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n === 1) return [signature[0]];
  if (n === 2) return [signature[0], signature[1]];
  if (n === 3) return [signature[0], signature[1], signature[2]];
  let first = signature[0];
  let second = signature[1];
  let third = signature[2];
  let result = [first, second, third];
  for (let i = 4; i <= n; i++) {
    let next = first + second + third;
    result.push(next);
    first = second;
    second = third;
    third = next;
  }
  return result;
}

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci([0, 0, 1], 10));
// console.log(tribonacci([0, 0, 0], 10));

// console.log(tribonacci([0, 1, 2], 0));
// console.log(tribonacci([0, 1, 2], 1));
// console.log(tribonacci([0, 1, 2], 2));
// console.log(tribonacci([0, 1, 2], 3));
// console.log(tribonacci([0, 1, 2], 4));

console.log(tribonacci([7, 18, 5], 3));
console.log(tribonacci([0, 13, 7], 2));
