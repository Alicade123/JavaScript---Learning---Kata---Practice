function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(41)); // true, "41 is prime");
console.log(isPrime(5099)); // true, "5099 is prime");
console.log(isPrime(0)); // false, "4 is not prime");
console.log(isPrime(1)); // false, "6 is not prime");
console.log(isPrime(2)); // false, "6 is not prime");
console.log(isPrime(8)); // false, "8 is not prime");
console.log(isPrime(9)); //false, "9 is not prime");
console.log(isPrime(45)); // false, "45 is not prime");
console.log(isPrime(-5)); // false, "-5 is not prime");
console.log(isPrime(-8)); // false, "-8 is not prime");
console.log(isPrime(-41)); //, false, "-41 is not prime");
