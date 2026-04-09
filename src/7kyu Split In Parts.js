var splitInParts = function (s, partLength) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (i > 0 && i % partLength === 0) {
      result = result + " ";
    }
    result = result + s[i];
  }
  return result;
};

console.log(splitInParts("supercalifragilisticexpialidocious", 0));
console.log(splitInParts("supercalifragilisticexpialidocious", 1));
console.log(splitInParts("supercalifragilisticexpialidocious", 3));
console.log(splitInParts("supercalifragilisticexpialidocious", 5));
console.log(splitInParts("supercalifragilisticexpialidocious", -10));
