function toCamelCase(s, n) {
  const words = s.toLowerCase().split(" ");

  if (n === 1) {
    // camelCase 1: capitalize first letter of each word except the first word
    return words
      .map((word, index) =>
        index === 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join("");
  }

  if (n === 2) {
    // camelCase 2: capitalize last letter of each word except the last word
    return words
      .map((word, index) => {
        if (index === words.length - 1) return word;
        return word.slice(0, -1) + word[word.length - 1].toUpperCase();
      })
      .join("");
  }

  if (n === 3) {
    // camelCase 3: capitalize first and last letter of each word,
    // except for first and last character of full sentence
    let result = "";
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let newWord =
        word[0].toUpperCase() +
        word.slice(1, -1) +
        word[word.length - 1].toUpperCase();
      result += newWord;
    }

    // Ensure first and last character of final string are lowercased
    return (
      result[0].toLowerCase() +
      result.slice(1, -1) +
      result[result.length - 1].toLowerCase()
    );
  }

  return s; // fallback
}

console.log(toCamelCase("Hello alicade and word", 1));

console.log(toCamelCase("Hello alicade and word", 2));

console.log(toCamelCase("Hello alicade and word", 3));
