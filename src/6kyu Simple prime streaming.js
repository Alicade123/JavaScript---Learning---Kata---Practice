function solve(a, b) {
  let primesConcat = "";
  let num = 2;
  let total = a + b;
  while (primesConcat.length < total) {
    if (isPrime(num)) {
      primesConcat += num;
    }
    num++;
  }

  return primesConcat.substring(a, a + b);
}

function isPrime(n) {  
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

console.log(solve(2, 2)); //"57");
console.log(solve(10, 3)); // "192");
console.log(solve(20, 9)); // "414347535");
console.log(solve(30, 12)); //, "616771737983");
console.log(solve(40, 8)); // "83899710");
console.log(solve(50, 6)); // "031071");
console.log(solve(10000, 5)); // "02192");
console.log(solve(20000, 5)); // "09334");
