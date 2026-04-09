function firstNonRepeatingLetter(s) {
  for (let str of s.split("")) {
    if (
      s.toUpperCase().indexOf(str.toUpperCase()) ===
      s.toUpperCase().lastIndexOf(str.toUpperCase())
    )
      return str;
  }
  return "";
}

console.log(firstNonRepeatingLetter("a")); // "For input \"a\""); //"a"
console.log(firstNonRepeatingLetter("streSS")); // "For input \"streSS\""); //"t"
console.log(firstNonRepeatingLetter("moon-men")); // "For input \"moon-men\""); //"-"
console.log(firstNonRepeatingLetter("moonmoon")); // "For input \"moonmoon\""); //""
console.log(firstNonRepeatingLetter("I Like To Take Candy From A Baby")); //"L"
