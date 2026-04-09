function postfixEvaluator(string) {
  let expression = [];
  let operators = "";
  string = string.split(" ");

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[0-9]/)) {
      expression.push(string[i]);
    } else {
      operators += string[i];
    }
  }
  operators = operators;

  let count = 0;
  let finalExpression = "";
  while (count < expression.length) {
    if (count === expression.length - 1) {
      finalExpression += expression[count];
    } else {
      finalExpression += expression[count] + operators[count];
    }
    count++;
  }
  return eval(finalExpression);
}
console.log(postfixEvaluator("2 3 +"));
console.log(postfixEvaluator("20 40 + 60 *"));
console.log(postfixEvaluator("4 8 + 6 5 - * 3 2 - 2 2 + * /"));
console.log(postfixEvaluator("25 45 +"));
