function getLargerNumbers(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) result.push(a[i]);
    else result.push(b[i]);
  }
  return result;
}

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));
