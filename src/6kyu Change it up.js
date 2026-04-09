function changer(str) {
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + 1) % 26) + 97);
      } else if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + 1) % 26) + 65);
      } else {
        return char;
      }
    })
    .map((charX) =>
      /[uieoaUIEOA]/.test(charX) ? charX.toUpperCase() : charX.toLowerCase()
    )
    .join("");
}
console.log(changer("Cat30z")); // "dbU30"
console.log(changer("Alice")); // "bmjdf"
console.log(changer("sponge1")); // "tqpOhf1"
console.log(changer("Hello World")); // "Ifmmp xpsmE"
console.log(changer("dogs")); // "Epht"
console.log(changer("z")); // "A"
