function reverseFizzBuzz(s) {
  s = s.split(" ");
  let x = 1;

  while (true) {
    let result = [];
    let match = true;

    for (let i = x; i < x + s.length; i++) {
      let curr;

      if (i % 3 === 0 && i % 5 === 0) curr = "FizzBuzz";
      else if (i % 3 === 0) curr = "Fizz";
      else if (i % 5 === 0) curr = "Buzz";
      else curr = String(i);

      result.push(i);
      if (curr !== s[i - x]) {
        match = false;
        break;
      }
    }

    if (match) return result;
    x++;
  }
}

console.log(reverseFizzBuzz("1 2 Fizz 4 Buzz")); // [1, 2, 3, 4, 5]
console.log(reverseFizzBuzz("Fizz 688 689 FizzBuzz")); // [687, 688, 689, 690]
console.log(reverseFizzBuzz("Fizz Buzz")); // [9, 10]
