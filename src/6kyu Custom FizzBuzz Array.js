let fizzBuzzCustom = function (
  stringOne = "Fizz",
  stringTwo = "Buzz",
  numOne = 3,
  numTwo = 5
) {
  let results = [];
  for (let i = 1; i < 100; i++) {
    if (i % numOne === 0 && i % numTwo === 0)
      results.push(stringOne + stringTwo);
    else if (i % numOne === 0) results.push(stringOne);
    else if (i % numTwo === 0) results.push(stringTwo);
    else results.push(i);
  }
  return results;
};
console.log(fizzBuzzCustom()[15]); // returns 16
console.log(fizzBuzzCustom()[44]); // returns "FizzBuzz" (45 is divisible by 3 and 5)
console.log(fizzBuzzCustom("Hey", "There")[25]); // returns 26
console.log(fizzBuzzCustom("Hey", "There")[11]); // returns "Hey" (12 is divisible by 3)
console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80]); // returns "What's " (81 is divisible by 3)
