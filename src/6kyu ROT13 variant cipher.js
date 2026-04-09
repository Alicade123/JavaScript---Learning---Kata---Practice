function encrypter(string) {
  let encrypted = string
    .toLowerCase()
    .split("")
    .map((char) => {
      let charCodeNo = char.charCodeAt(0);
      if (charCodeNo >= 97 && charCodeNo <= 122)
        return String.fromCharCode(((charCodeNo - 97 + 13) % 26) + 97);
      else return char;
    })
    .join("");
  return encrypted
    .split("")
    .map((letter) => {
      let charCodeNo = letter.charCodeAt(0);
      if (charCodeNo >= 97 && charCodeNo <= 122)
        return String.fromCharCode(122 - (charCodeNo - 97));
      else return letter;
    })
    .join("");
}

console.log(encrypter("WELCOME to our organization")); //"qibkyai ty ysv yvgmzenmteyz"
