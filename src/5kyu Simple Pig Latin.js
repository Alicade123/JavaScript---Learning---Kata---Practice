function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      word.match(/[a-zA-Z0-9]/) ? word.slice(1) + word.slice(0, 1) + "ay" : word
    )
    .join(" ");
}
console.log(pigIt("Pig latin is cool !")); // "igPay atinlay siay oolcay"
console.log(pigIt("This is my string")); // "hisTay siay ymay tringsay"
