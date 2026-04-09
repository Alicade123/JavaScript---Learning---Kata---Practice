function x(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = n; j >= 0; j--) {
      if (j === i || j === n - 1 - i) matrix[i][j] = 1;
    }
  }

  return matrix;
}

console.log(x(6));
