function removeConsecutiveDuplicates(string) {
  if (string.length === 0) return "";
  const arr = string.split(" ");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) continue;
    result += arr[i] + " ";
  }
  return result.trim();
}

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

console.log(removeConsecutiveDuplicates(""));
console.log(removeConsecutiveDuplicates("alpha alpha alpha alpha", "alpha"));
