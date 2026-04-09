function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(start, finish) {
  let primes = [];
  if (start < finish) {
    for (let n = start; n <= finish; n++) {
      if (isPrime(n)) primes.push(n);
    }
  } else if (start > finish) {
    for (let n = start; n >= finish; n--) {
      if (isPrime(n)) primes.push(n);
    }
  } else {
    return [];
  }
  return primes.sort((a, b) => a - b);
}

console.log(isPrime(0)); // === false
console.log(isPrime(1)); // === false
console.log(isPrime(2)); // === true
console.log(isPrime(3)); // === true
console.log(isPrime(4)); // === false
console.log(isPrime(5)); // === true

console.log(getPrimes(0, 0)); // === []
console.log(getPrimes(0, 30)); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
console.log(getPrimes(30, 0)); // === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
