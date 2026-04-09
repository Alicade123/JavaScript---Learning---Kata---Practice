function countBits(n) {
  //   if (n < 0) return false;
  let remainder = [];
  n % 2 === 1 && remainder.push(n % 2);
  let quotient = Math.trunc(n / 2);
  if (Math.trunc(n / 2) === 1 && n % 2 === 1) remainder.push(1);
  while (quotient >= 2) {
    quotient % 2 === 1 && remainder.push(quotient % 2);
    quotient = Math.trunc(quotient / 2);
    if (quotient === 1) remainder.push(quotient);
  }
  return remainder.length;
}
console.log(countBits(1234)); // 5);
console.log(countBits(0)); // 0);
console.log(countBits(1)); //1
console.log(countBits(4)); // 1);
console.log(countBits(7)); // 3);
console.log(countBits(9)); // 2);
console.log(countBits(10)); // 2);
console.log(countBits(3)); // 2);
