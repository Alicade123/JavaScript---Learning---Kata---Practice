var midpointSum = function (n) {
  let index = 1;
  while (index < n.length - 1) {
    let leftSide = 0;
    let rightSide = 0;
    for (let i = 0; i <= n.length - 1; i++) {
      if (i < index) leftSide += n[i];
      if (i > index) rightSide += n[i];
      if (i === n.length - 1 && rightSide === leftSide) return index;
    }
    index++;
  }
  return null;
};
// midpointSum([4, 1, 7, 9, 3, 9]);
// midpointSum([1, 0, 1]);
console.log(midpointSum([4, 1, 7, 9, 3, 9])); // 3
console.log(midpointSum([1, 0, 1])); // 1
console.log(midpointSum([9, 0, 1, 2, 3, 4])); // 2
console.log(midpointSum([0, 0, 4, 0]));
console.log(midpointSum([0, 0, 1]));
