function numbersOfLetters(integer) {
  const myCounter = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    0: "zero",
  };

  let result = [];

  function reusable(num) {
    let currentValue = "";
    const numStr = String(num);
    for (let dig of numStr) {
      currentValue += myCounter[dig];
    }
    result.push(currentValue);
  }

  reusable(integer);

  while (result[result.length - 1] !== "four") {
    reusable(result[result.length - 1].length);
  }

  return result;
}

console.log(numbersOfLetters(1)); //, ["one", "three", "five", "four"]);
console.log(numbersOfLetters(12)); //, ["onetwo", "six", "three", "five", "four"]);
console.log(numbersOfLetters(37)); //, ["threeseven", "onezero", "seven", "five", "four"]);
console.log(numbersOfLetters(311)); //, ["threeoneone", "oneone", "six", "three", "five", "four"]);
console.log(numbersOfLetters(999)); //, ["nineninenine", "onetwo", "six", "three", "five", "four"]);
