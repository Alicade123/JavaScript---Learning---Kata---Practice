sumAllEvenFibonacciNumbers = (n) => {
  for (a = 1, b = 2, s = 0; a <= n; )
    a % 2 < 1 ? (s += a) : 0, ([a, b] = [b, a + b]);
  return s;
};
