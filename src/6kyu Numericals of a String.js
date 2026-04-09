function numericals(s) {
  let map = new Map();
  let results = "";
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s.charAt(i))) {
      map.set(s.charAt(i), 1);
      results += map.get(s.charAt(i));
    } else {
      map.set(s.charAt(i), map.get(s.charAt(i)) + 1);
      results += map.get(s.charAt(i));
    }
  }
  return results.toString();
}

console.log(numericals("Hello, World!")); //"1112111121311"
console.log(numericals("Hello, World! It's me, JomoPipi!")); //"11121111213112111131224132411122"
console.log(numericals("hello hello")); //"11121122342"
console.log(numericals("aaaaaaaaaaaa")); //"123456789101112"
