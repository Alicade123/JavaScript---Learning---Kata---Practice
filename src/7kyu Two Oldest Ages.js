function twoOldestAges(ages) {
  return ages
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reverse();
}
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
