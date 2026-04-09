function generateHashtag(str) {
  if (!str.trim()) return false;
  
  str = str.trim().split(/\s+/);
  let captalized = str.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  let hastag = "#" + captalized.join("");
  return hastag.length > 140 ? false : hastag;
}
console.log(generateHashtag("a" + "a".repeat(10) + " war".repeat(130)));
console.log(generateHashtag(" "));
console.log(generateHashtag("a".repeat(179) + "x"));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag(" ".repeat(20)));
console.log(generateHashtag(""));
