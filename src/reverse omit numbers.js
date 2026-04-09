function reverseLetter(str) {
  //coding and coding..
  return str
    .split("")
    .filter((char) => /[a-zA-Z]/.test(char))
    .reverse()
    .join("");
}

console.log(reverseLetter(" alicade"));
console.log(reverseLetter("45rghas"))
