function postfixEvaluator(string) {
  const tokens = string.trim().split(/\s+/);
  const stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token, 10));
    } else {
      const b = stack.pop();
      const a = stack.pop();

      let result;
      switch (token) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = Math.trunc(a / b);
          break;
        default:
          throw new Error(`Unknown operator: ${token}`);
      }

      stack.push(result);
    }
  }

  return stack.pop(); // final result
}

console.log(postfixEvaluator("2 3 +")); //5
console.log(postfixEvaluator("20 40 + 60 *")); //3600
console.log(postfixEvaluator("4 8 + 6 5 - * 3 2 - 2 2 + * /")); //3;
console.log(postfixEvaluator("44 17 -77 -85 / - - 73 -14 + -8 8 66 / + * /")); //-0
console.log(postfixEvaluator("0 1 * -16 - 40 -34 45 / -84 * - -")); //24
