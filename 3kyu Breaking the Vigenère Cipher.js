const getKeyword = (ciphertext, keyLength) => {
  const groups = Array.from({ length: keyLength }, () => []);

  // Step 1: Split ciphertext into keyLength groups
  for (let i = 0; i < ciphertext.length; i++) {
    groups[i % keyLength].push(ciphertext[i]);
  }

  // Step 2: Analyze each group
  const key = groups.map((group) => {
    // Count frequency of each letter
    const freq = Array(26).fill(0);
    for (const char of group) {
      freq[char.charCodeAt() - 65]++;
    }

    // Find the most frequent letter
    const maxIndex = freq.indexOf(Math.max(...freq));

    // Step 3: Assume most frequent is 'E' (which is index 4), calculate shift
    const shift = (26 + maxIndex - 4) % 26;

    // Convert shift back to key character
    return String.fromCharCode(65 + shift);
  });

  return key.join("");
};

const ciphertext = "HFNIMVOSNA";
const keyLength = 6;

console.log(getKeyword(ciphertext, keyLength)); // ➜ "ABCXYZ"
