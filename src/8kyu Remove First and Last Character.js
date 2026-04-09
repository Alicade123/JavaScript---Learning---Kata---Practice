function removeChar(str) {
  return str.length < 2 ? "" : str.slice(0, str.length - 1);
}
console.log(removeChar("program"));
