const vigenereCipher = (input, key) => {
  if (input.length > key.length) {
    key = key + key.slice(0, input.length - key.length);
  } else if (key.length > input.length) {
    key = key.slice(0, input.length);
  }
  let result = [];
  for (let i = 0; i < input.length; i++) {
    let space = -(key[i].charCodeAt() - 65);
    let letter =
      input[i].charCodeAt() + space >= 65
        ? String.fromCharCode(input[i].charCodeAt() + space)
        : String.fromCharCode(91 + (input[i].charCodeAt() - 65 + space));
    result.push(letter);
  }
  return result.join("");
};

console.log(vigenereCipher("HFNIMVOSNA", "ABCXYZ")); // HELLOWORLD
console.log(
  vigenereCipher("NSWXARWJGEXXNSWXARWJGEXIJCZWUZLOAWFJF", "CODEWARS")
);
