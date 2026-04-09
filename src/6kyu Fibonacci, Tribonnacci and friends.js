function Xbonacci(signature, n) {
  let result = signature.slice();
  const X = signature.length;

  while (result.length < n) {
    const next = result.slice(-X).reduce((sum, val) => sum + val, 0);
    result.push(next);
  }
  return result.slice(0, n);
}
console.log(Xbonacci([0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 2, 1], 10));
