function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkGoldbach(number) {
  if (number <= 2 || number % 2 !== 0) return [];

  for (let i = 2; i < number; i++) {
    if (isPrime(i) && isPrime(number - i)) {
      return [i, number - i]; // First pair found = farthest apart
    }
  }

  return [];
}

// ✅ Test cases
console.log(checkGoldbach(1)); // []
console.log(checkGoldbach(2)); // []
console.log(checkGoldbach(3)); // []
console.log(checkGoldbach(4)); // [2, 2]
console.log(checkGoldbach(6)); // [3, 3]
console.log(checkGoldbach(8)); // [3, 5]
console.log(checkGoldbach(14)); // [3, 11]
