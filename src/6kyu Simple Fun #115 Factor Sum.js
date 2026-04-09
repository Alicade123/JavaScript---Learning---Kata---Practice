function factorSum(n) {
  let sum = 0;
  let temp = n;
  let i = 2;

  while (i <= temp) {
    if (temp % i === 0) {
      sum += i;
      temp /= i;
      i = 2;
    } else {
      i++;
    }
  }

  if (sum === n) {
    return sum;
  }
  return factorSum(sum);
}

console.log(factorSum(24)); // 5
console.log(factorSum(9)); // 5
console.log(factorSum(156)); // 5
console.log(factorSum(4)); // 4
console.log(factorSum(31)); // 31
