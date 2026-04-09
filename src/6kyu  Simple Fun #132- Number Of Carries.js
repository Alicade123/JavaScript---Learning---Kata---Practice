function numberOfCarries(a, b) {
  let count = 0;
  let carry = 0;

  while (a > 0 || b > 0) {
    const digitA = a % 10;
    const digitB = b % 10;
    const sum = digitA + digitB + carry;
    if (sum >= 10) {
      count++;
      carry = 1;
    } else {
      carry = 0;
    }
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
  }
  return count;
}
console.log(numberOfCarries(543, 3456)); //0
console.log(numberOfCarries(1927, 6426)); //2
console.log(numberOfCarries(9999, 1)); //4
console.log(numberOfCarries(1234, 5678)); //2
