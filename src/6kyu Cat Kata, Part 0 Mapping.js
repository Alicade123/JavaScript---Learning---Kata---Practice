const catKataPart1 = ([r, c], CAT1, CAT2, CAT3) => {
  let yard = [];
  for (let i = 0; i < r; i++) {
    let line = "";
    for (let j = 0; j < c; j++) {
      if (i === CAT1[0] && j === CAT1[1]) {
        line += "L";
      } else if (i === CAT2[0] && j === CAT2[1]) {
        console.log(CAT1[0] - CAT2[0] + CAT1[1] - CAT2[1]); //Manhattan distance formula: |x₁ - x₂| + |y₁ - y₂|.

        line += "M";
      } else if (i === CAT3[0] && j === CAT3[1]) {
        line += "R";
      } else {
        line += "-";
      }
    }
    yard.push(line);
  }
  return yard;
};

console.log(catKataPart1([6, 11], [1, 1], [3, 3], [5, 10]));
console.log(catKataPart1([6, 11], [1, 3], [4, 7], [101, 101]));
