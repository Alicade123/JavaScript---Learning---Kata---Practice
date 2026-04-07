const vigenereCipher = (input, key) => {
  if (input.length > key.length) {
    key = key + key.slice(0, input.length - key.length);
  } else if (key.length > input.length) {
    key = key.slice(0, input.length);
  }
  let result = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].charCodeAt() >= 65 && input[i].charCodeAt() <= 90) {
      let space = key[i].charCodeAt() - 65;
      let letter =
        input[i].charCodeAt() + space <= 90
          ? String.fromCharCode(input[i].charCodeAt() + space)
          : // : String.fromCharCode(((input[i].charCodeAt() + space) % 91) + 65);
            String.fromCharCode(
              ((input[i].charCodeAt() - 65 + space) % 26) + 65
            );
      result.push(letter);
    } else if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
      let space = key[i].charCodeAt() - 97;
      let letter =
        input[i].charCodeAt() + space <= 122
          ? String.fromCharCode(input[i].charCodeAt() + space)
          : // : String.fromCharCode(((input[i].charCodeAt() + space) % 123) + 97);
            String.fromCharCode(
              ((input[i].charCodeAt() - 97 + space) % 26) + 97
            );
      result.push(letter);
    } else {
      result.push(input[i]);
    }
  }
  return result.join("");
};

console.log(vigenereCipher("HELLOWORLD", "ABCXYZ")); // HFNIMVOSNA
console.log(vigenereCipher("codewars", "password")); // rovwsoiv
