function innerJoin(arrA, arrB, indA, indB) {
  const result = [];

  for (let rowA of arrA) {
    const valA = rowA[indA];
    if (valA === null || valA === undefined) continue;
    for (let rowB of arrB) {
      const valB = rowB[indB];
      if (valB === null || valB === undefined) continue;
      if (valA === valB) {
        result.push([...rowA, ...rowB]);
      }
    }
  }
  return result;
}
let arrA = [
  [1, 10],
  [2, 20],
  [2, 30],
];

let arrB = [
  [1, 100],
  [1, 200],
  [2, 400],
];

let indA = 0;
let indB = 0;
innerJoin(arrA, arrB, indA, indB);
