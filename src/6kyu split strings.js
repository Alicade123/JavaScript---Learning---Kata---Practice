function solution(str) {
  let results = [];
  for (let i = 0; i < str.length; i += 2) {
    let pair = str[i] + (str[i + 1] || "_");
    results.push(pair);
  }
  return results;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution("a"));
console.log(solution(""));
console.log(solution("1234312"));
