function wordGenerator(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let results = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      for (let j = 0; j < vowels.length; j++) {
        let newWord = str.slice(0, i) + vowels[j] + str.slice(i + 1);
        results.push(newWord);
      }
    }
  }

  // If no vowels found, return original string
  return results.length > 0 ? results : [str];
}

console.log(wordGenerator("Pszczyna")); //, ["pszXXXczyna", "pszczyne", "pszczyni", "pszczyno", "pszczynu"], 'Not quite right!');
console.log(wordGenerator("aa")); //,['aa', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'ii', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo','uu'], 'Check if it works correctly with vowels');
console.log(wordGenerator("b")); //,['b'], 'Check how function works without vowels');
