function duplicateCount(text) {
  text = text.toLowerCase();
  const unique = [...new Set(text)];
  let results = 0;

  for (let i = 0; i < unique.length; i++) {
    let count = 0;
    for (let j = 0; j < text.length; j++) {
      if (unique[i] === text[j]) count++;
    }
    if (count > 1) results++;
  }
  return results;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2, "should ignore case"
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); //2,  "characters may not be adjacent");
