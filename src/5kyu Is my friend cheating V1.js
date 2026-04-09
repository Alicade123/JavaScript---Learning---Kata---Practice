const removeNb = (n) => {
  let sum = (n * (n + 1)) / 2;
  let result = [];
  for (let a = 1; a <= n; a++) {
    b = (sum - a) / (a + 1);
    if (b % 1 === 0 && b <= n) {
      result.push([a, b]);
    }
  }

  return result;
};
console.log(removeNb(26));
console.log(removeNb(100));
