function alphanumeric(string) {
  string = string.split("");
  if (string.length === 0) return false;
  let decision = true;
  for (let i = 0; i < string.length; i++) {
    if (/[a-zA-Z0-9]/.test(string[i])) {
      continue;
    } else {
      decision = false;
    }
  }
  return decision;
}
console.log(alphanumeric("Mazinkaiser")); // true
console.log(alphanumeric("hello world_")); // false
console.log(alphanumeric("PassW0rd")); // true
console.log(alphanumeric("     ")); // false
console.log(alphanumeric(" g1TL5aqhk2QvLXiNJXC")); //false
