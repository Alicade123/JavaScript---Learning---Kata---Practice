var maxSequence = function (arr) {
  // ...
  //   let sum = 0;
  arr.every((element) => {
    if (element > 0) {
      let sum = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, arr[0]);
    }
  });
  if (element < 0 && arr.length === 0) {
    return 0;
  } else {
    return;
    let sum = arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, arr[0]);
  }
}; 
