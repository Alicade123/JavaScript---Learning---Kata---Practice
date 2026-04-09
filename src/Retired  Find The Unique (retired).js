const findUniq = (arr) => {
  let [a, b, c] = arr;
  let repeating = a === b ? a : a === c ? a : b;

  return arr.find((x) => !Object.is(x, repeating));
};
