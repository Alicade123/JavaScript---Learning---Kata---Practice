function greatestProduct(input) {
  let five = [];
  let index = 0;
  while (index <= input.length - 5) {
    five.push(input.slice(index, index + 5));
    index++;
  }

  five = five.map((element) =>
    element.split("").reduce((acc, value) => parseInt(acc) * parseInt(value), 1)
  );
  return five.sort((a, b) => b - a)[0];
}

console.log(greatestProduct("123834539327238239583")); //  3240,  "The method gave a wrong answer"
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292,  "The method gave a wrong answer"
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
console.log(greatestProduct("92494737828244222221111111532909999")); // 5292
console.log(greatestProduct("02494037820244202221011110532909999")); // 0
