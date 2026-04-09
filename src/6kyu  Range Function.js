const range = (start_value, step, stop_value) => {
  let numbers = [];

  if (stop_value === undefined && step === undefined) {
    stop_value = start_value;
    start_value = 1;
    step = 1;
  } else if (stop_value === undefined) {
    stop_value = step;
    step = 1;
  }
  for (let i = start_value; i <= stop_value; i += step) {
    numbers.push(i);
  }

  return numbers;
};
console.log(range()); //range() -->
console.log(range(5)); //range(5) --> 1,2,3,4,5
console.log(range(3, 7)); //range(3, 7) --> 3,4,5,6,7
console.log(range(2, 3, 15)); //range(2, 3, 15) --> 2,5,8,11,14
console.log(range(5, 5, 32, 3, 23)); //range(5, 5, 32, 3, 23) --> 5, 10, 15, 20, 25, 30
