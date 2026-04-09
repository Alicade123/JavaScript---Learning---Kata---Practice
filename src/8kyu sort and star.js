function twoSort(s) {
  const sort = s.sort();
  return sort[0].split("").join("***");
}
console.log(
  twoSort([
    "Aaa",
    "take",
    "over",
    "the",
    "bitcoin",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
