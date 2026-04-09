function calcType(a, b, res) {
  // your code here
  if (a + b === res) return "addition";
  else if (a - b === res) return "subtraction";
  else if (a * b === res) return "multiplication";
  else if (a / b === res) return "division";
}

console.log(calcType(1, 2, 3)); //addition
console.log(calcType(10, 4, 40)); //multiplication
console.log(calcType(10, 5, 5)); //substraction
console.log(calcType(9, 5, 1.8)); //division
