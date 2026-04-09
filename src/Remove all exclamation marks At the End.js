function remove(string) {
  return string.replace(/\b(\w+)!+$/g, "$1");
}
console.log(remove("Hi! Hi"));
console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));
console.log(remove("!Hi!"));
console.log(remove("Hi! Hi!"));
console.log(remove("Hi"));
