function removeDuplicateWords(string) {
  const words = string.split(" ");
  const uniqueWords = [...new Set(words)];
  return uniqueWords.join(" ");
}
console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
