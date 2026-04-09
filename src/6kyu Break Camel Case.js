function solution(string) {
  let results = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90)
      results += ` ${string[i]}`;
    else {
      results += `${string[i]}`;
    }
  }
  return results;
}

console.log(solution("HelloWorld"));
console.log(solution("camelCasingTest"));
