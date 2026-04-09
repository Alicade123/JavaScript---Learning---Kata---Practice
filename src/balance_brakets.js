function fixParentheses(s) {
  let openNeeded = 0;
  let closeNeeded = 0;

  for (let char of s) {
    if (char === "(") {
      openNeeded++;
    } else if (char === ")") {
      if (openNeeded > 0) {
        openNeeded--; // matched a '('
      } else {
        closeNeeded++; // need an extra '('
      }
    }
  }

  // Add needed '(' at the beginning and needed ')' at the end
  return "(".repeat(closeNeeded) + s + ")".repeat(openNeeded);
}

// Test cases
console.log(fixParentheses(")(")); // "()()"
console.log(fixParentheses("))))(()(")); // "(((())))(()())"
console.log(fixParentheses("(()")); // "(()))"
console.log(fixParentheses(")))")); // "((()))"
console.log(fixParentheses("(((")); // "(((())))"
