//BITWISE XOR :
//XOR-based logic works only when:
//Every number in the array appears exactly twice, except one unique number that appears once.

//The array contains only integers (because XOR doesn't work correctly with floats like 0.55).
// const findUniq = (arr) => {
//   let uniquenumber = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     uniquenumber ^= arr[i];
//   }
//   return uniquenumber;
// };

// const findUniq = (array) => {
//   let uniquenumber = "";
//   for (let i = 0; i < array.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] === array[j]) {
//         counter++;
//       }
//     }
//     if (counter === 1) {
//       return array[i];
//     }
//   }
//   return "none";
// };

const findUniq = (arr) => {
  return arr.find(
    (element) => arr.indexOf(element) === arr.lastIndexOf(element)
  );
};
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
