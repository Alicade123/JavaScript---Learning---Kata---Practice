function factorial(n) {
  let result = "1";

  for (let i = 2; i <= n; i++) {
    result = multiply(result, String(i));
  }

  return result;
}

// multiply two numbers represented as strings
function multiply(a, b) {
  let res = Array(a.length + b.length).fill(0);

  a = a.split("").reverse();
  b = b.split("").reverse();

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      let prod = res[i + j] + Number(a[i]) * Number(b[j]);
      res[i + j] = prod % 10;
      res[i + j + 1] += Math.floor(prod / 10);
    }
  }

  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop();
  }

  return res.reverse().join("");
}
