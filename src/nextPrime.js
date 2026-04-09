function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Divisible by i, not a prime
    }
    return true; // It's a prime number
}

function nextPrime(n) {
    let candidate = n + 1; // Start checking from n+1
    while (!isPrime(candidate)) {
        candidate++; // Keep checking next number until we find a prime
    }
    return candidate; // Return the found prime number
}

// Test cases
console.log(nextPrime(5));  // 7
console.log(nextPrime(12)); // 13
console.log(nextPrime(1));  // 2
console.log(nextPrime(17)); // 19
console.log(nextPrime(20)); // 23
