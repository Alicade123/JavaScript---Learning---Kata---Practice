function sortTheInnerContent(words) {
  return words
    .split(" ")
    .map((word) => {
      if (word.length === 1) return word;
      return (
        word[0] +
        word
          .split("")
          .slice(1, word.length - 1)
          .sort((a, b) => b.localeCompare(a))
          .join("") +
        word[word.length - 1]
      );
    })
    .join(" ");
}
// console.log(sortTheInnerContent("sort the inner content in descending order")); //  "srot the inner ctonnet in dsnnieedcg oredr"
// console.log(sortTheInnerContent("wait for me")); // "wiat for me"
// console.log(sortTheInnerContent("this kata is easy")); // "tihs ktaa is esay"

console.log(sortTheInnerContent("lyrphr aa srkhgfecaj dwuutibao iwvgd"));
console.log(sortTheInnerContent("a"));
