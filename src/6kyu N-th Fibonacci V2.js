function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  if (n === 1) return 0;
  if (n == 2) return 1;
  let first = 0;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    let next = first + second;
    first = second;
    second = next;
  }
  return second;
}
console.log(nthFibo(10));
