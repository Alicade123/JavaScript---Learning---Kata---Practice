const sumAllEvenFibonacciNumbers = (n) => {
  let first = 0,
    second = 1,
    sum = 0;
  while (second <= n) {
    if (second % 2 === 0) sum += second;
    [first, second] = [second, first + second];
  }
  return sum;
};

console.log(sumAllEvenFibonacciNumbers(4));
console.log(sumAllEvenFibonacciNumbers(-1002));
console.log(sumAllEvenFibonacciNumbers(10000));
