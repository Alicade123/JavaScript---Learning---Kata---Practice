const removeNb = (n) => {
  let sum = 0;
  let series = [];
  for (let i = 1; i <= n; i++) {
    series.push(i);
    sum += i;
  }
  let result = [];
  for (let i = 0; i < series.length; i++) {
    for (let j = i + 1; j < series.length; j++) {
      const a = series[i];
      const b = series[j];
      if (a * b === sum - a - b) {
        result.push([a, b], [b, a]);
      }
    }
  }
  return result;
};
console.log(removeNb(26));
console.log(removeNb(100));
