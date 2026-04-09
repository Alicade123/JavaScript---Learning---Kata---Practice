function ROT135(input) {
  return input
    .split("")
    .map((char) => {
      let charcode = char.charCodeAt(0);
      if (char.match(/\d/)) {
        return ((parseInt(char) + 5) % 10).toString();
      } else if (charcode >= 65 && charcode <= 90) {
        return String.fromCharCode(((charcode - 65 + 13) % 26) + 65);
      } else if (charcode >= 97 && charcode <= 122) {
        return String.fromCharCode(((charcode - 97 + 13) % 26) + 97);
      } else return char;
    })
    .join("");
}
console.log(ROT135("The quick brown fox jumps over the 2 lazy dogs 9")); //"Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf"
console.log(ROT135("The quick brown fox jumps over the 12 lazy dogs"));
