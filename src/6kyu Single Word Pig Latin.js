function pigLatin(string) {
  if (/[^a-zA-Z]/.test(string)) return null;

  const vowels = /[aeiouAEIOU]/;
  if (vowels.test(string[0])) {
    return `${string}way`.toLowerCase();
  }

  if (!vowels.test(string)) {
    return `${string}ay`.toLowerCase();
  }

  let consonantCluster = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.test(string[i])) {
      return (string.slice(i) + consonantCluster + "ay").toLowerCase();
    } else {
      consonantCluster += string[i];
    }
  }
  return null; 
}

console.log(pigLatin("map")); // "apmay"
console.log(pigLatin("egg")); // "eggway"
console.log(pigLatin("tes3t5")); // null
console.log(pigLatin("spaghetti")); // null
