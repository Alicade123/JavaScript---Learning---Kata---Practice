function generateHashtag(str) {
  if (!str.trim()) return false;
  if (str.split(/[a-zA-Z0-9]/).length > 140) return false;
  let result = "#";
  str = str.trim().split(/\s+/);

  for (let x = 0; x < str.length; x++) {
    result += str[x].charAt(0).toUpperCase() + str[x].slice(1);
  }
  return result;
}
console.log(generateHashtag("a" + "a".repeat(10) + " war"));
console.log(generateHashtag(" "));
console.log(generateHashtag("a".repeat(179) + "x"));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag(" ".repeat(20)));
console.log(generateHashtag(""));
