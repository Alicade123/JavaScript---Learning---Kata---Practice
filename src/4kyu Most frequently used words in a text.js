function topThreeWords(text) {
  if (!text) return [];

  let words = text.toLowerCase().match(/[a-z]+'?[a-z']*|[a-z]+/g);
  console.log(words);
  if (!words || words.length === 0) return [];
  let occurancy = [];
  for (i = 0; i < words.length; i++) {
    let counter = 0;
    for (j = 0; j < words.length; j++) {
      if (words[j] === words[i]) {
        counter++;
      }
    }
    occurancy.push(`${counter}${words[i]}`);
  }
  const occurancyWords = [...new Set(occurancy.sort())];
  const withnumbers = occurancyWords.slice(-3).reverse();
  return withnumbers.map((withnumber) => withnumber.slice(1));
}

console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
 mind, there lived not long since one of those gentlemen that keep a lance
 in the lance-rack, an old buckler, a lean hack, and a greyhound for
 coursing. An olla of rather more beef than mutton, a salad on most
 nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
 on Sundays, made away with three-quarters of his income.`)
);
