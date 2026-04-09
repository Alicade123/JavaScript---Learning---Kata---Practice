function lettersToNumbers(s) {
  let totalScore = 0;
  for (let char of s) {
    if (char >= "a" && char <= "z") {
      totalScore += char.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else if (char >= "A" && char <= "Z") {
      totalScore += (char.charCodeAt(0) - "A".charCodeAt(0) + 1) * 2;
    } else if (char >= "0" && char <= "9") {
      totalScore += Number(char);
    }
  }
  return totalScore;
}

console.log(lettersToNumbers("ILoveYou"));
console.log(lettersToNumbers("I Love !!!!!!!!!!!!!You"));
