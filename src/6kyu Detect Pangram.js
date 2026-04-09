function isPangram(string) {
  string = string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .map((char) => char.charCodeAt());

  for (let i = 97; i < 122; i++) {
    if (!string.includes(i)) return false;
  }
  return true;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string)); //true
