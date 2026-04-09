var uniqueInOrder = function (iterable) {
  const results = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) continue;
    else results.push(iterable[i]);
  }
  return results;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ["A", "B", "C", "D", "A", "B"];
console.log(uniqueInOrder("ABBCcAD")); // ["A", "B", "C", "c", "A", "D"];
console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1, 2, 3];
