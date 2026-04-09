function monkeyCount(n) {
  // your code here
  result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result.reverse();
}
console.log(monkeyCount(5));
console.log(monkeyCount(3));
console.log(monkeyCount(0));
