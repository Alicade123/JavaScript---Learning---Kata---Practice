function insertMissingLetters(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // 1. Find all letters NOT in the original string
  const missing = alphabet.filter((letter) => !str.includes(letter));

  let result = "";
  let seen = new Set(); // To track the "first occurrence"

  for (let char of str) {
    result += char;

    // Only process the first time we see this character
    if (!seen.has(char)) {
      // Find missing letters that come AFTER this specific character
      const toAdd = missing
        .filter((m) => m > char)
        .join("")
        .toUpperCase();

      result += toAdd;
      seen.add(char);
    }
  }

  return result;
}

console.log(insertMissingLetters("hello"));
//"hIJKMNPQRSTUVWXYZeFGIJKMNPQRSTUVWXYZlMNPQRSTUVWXYZloPQRSTUVWXYZ",
//"hKMNPQRSTUVWXYZeGIJKMNPQRSTUVWXYZlQRSTUVWXYZlQRSTUVWXYZoTUVWXYZ"
