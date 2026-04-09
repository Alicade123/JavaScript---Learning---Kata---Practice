function isPolydivisible(n) {
  const str = n.toString();

  for (let i = 1; i <= str.length; i++) {
    const num = parseInt(str.slice(0, i), 10);
    if (num % i !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isPolydivisible(1232));    // true
console.log(isPolydivisible(123220));  // false
console.log(isPolydivisible(0));       // true
