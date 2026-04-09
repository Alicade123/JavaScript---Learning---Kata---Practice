function narcissistic(value) {
  // Code me to return true or false
  let myNumber = value.toString();
  let myNumberSize = myNumber.length;
  let sum = 0;

  for (let i = 0; i < myNumberSize; i++) {
    let x = Number.parseInt(myNumber.charAt(i));
    let y = Math.pow(x, myNumberSize);

    sum += y;
  }

  return sum == value;
}
console.log(narcissistic(153)); // "153 is narcissistic");//true
console.log(narcissistic(1634)); // "1634 is narcissistic");//true
console.log(narcissistic(112)); // "112 is not narcissistic");//false
