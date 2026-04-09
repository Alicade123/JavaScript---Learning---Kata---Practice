function exchangeWith(a, b) {
  const acopy = [...a];
  const bcopy = [...b];
  a.length = 0;
  b.length = 0;

  for (let i = 0; i < acopy.length; i++) {
    b.push(acopy[i]);
  }
  for (let j = 0; j < bcopy.length; j++) {
    a.push(bcopy[j]);
  }
  return [a.reverse(), b.reverse()];
}

console.log(exchangeWith(["a", "b", "c"], [1, 2, 3]));
