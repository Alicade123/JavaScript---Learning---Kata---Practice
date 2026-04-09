function rotate(array, n) {
  let results = [];
  n = n % array.length;
  if (n > 0) {
    results = array.slice(-n);
    for (let i = 0; i < array.length - n; i++) {
      results.push(array[i]);
    }
    return results;
  } else if (n < 0) {
    const x = n * -1;
    results.push(array.slice(0, x));
    for (let i = array.length - 1; i >= x; i--) {
      results.unshift(array[i]);
    }
    return results.flat(1); //depth =1, Optional
  } else {
    return array;
  }
}
var data = [1, 2, 3, 4, 5];
console.log(rotate(data, 0)); //[ 1, 2, 3, 4, 5 ]
console.log(rotate(data, 1)); //[ 5, 1, 2, 3, 4 ]
console.log(rotate(data, -3)); //[ 4, 5, 1, 2, 3 ]
