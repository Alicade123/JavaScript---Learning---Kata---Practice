function evenChars(string) {
  let word = string.split("");
  if (word.length < 2 || word.length > 100) {
    return "invalid string";
  } else {
    let evenChars = [];
    for (let i = 1; i < word.length; i += 2) {
      evenChars.push(word[i]);
    }
    return evenChars;
  }
}
console.log(evenChars("abcdefg")); // ["a", "b", "c", "d", "e", "f", "g"]
console.log(evenChars("g")); // invalid string
console.log(evenChars("1234")); // [ "2", , "4"]
