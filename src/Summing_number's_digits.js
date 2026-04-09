function sumNumbers(number) {
  return Math.abs(number) //Ignoring the sign absolute value using (built-in method Math.abs())
    .toString() //Converts number into string
    .split("") //Separate every single char(number)
    .map(Number) //Return into numbers
    .reduce((acc, value) => acc + value, 0); //Make summation through the reduce iterator
}

console.log(sumNumbers(20)); //2
console.log(sumNumbers(22)); //4
console.log(sumNumbers(-23)); //5
