function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestMultiple(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}

// Test cases
console.log(smallestMultiple(5)); // Output: 60
console.log(smallestMultiple(10)); // Output: 2520
console.log(smallestMultiple(20)); // Output: 232792560
