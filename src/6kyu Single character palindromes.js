function solve(s) {
  let oneCharacter = false;
  if (s === s.split("").reverse().join("")) return "OK";
  else {
    for (let i = 0; i < s.length; i++) {
      const a = s.slice(0, i) + s.slice(i + 1);
      if (a === a.split("").reverse().join("")) return "remove one";
    }
    return "not possible";
  }
}
console.log(solve("abba")); //, "OK");
console.log(solve("abbaa")); //, "remove one");
console.log(solve("abbaab")); //, "not possible");
console.log(solve("madmam")); //, "remove one");
console.log(solve("raydarm")); //, "not possible");
console.log(solve("hannah")); //, "OK");
