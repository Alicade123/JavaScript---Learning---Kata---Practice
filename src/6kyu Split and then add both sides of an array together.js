function splitAndAdd(arr, n) {
  for (let count = 0; count < n; count++) {
    const half = Math.floor(arr.length / 2);
    let arr1 = arr.slice(0, half);
    let arr2 = arr.slice(half);
    if (arr1.length < arr2.length) arr1.unshift(0);
    let newarr = [];
    for (i = 0; i < arr2.length; i++) {
      newarr.push((arr1[i] || 0) + arr2[i]);
    }
    arr = newarr;
  }
  return arr;
}

console.log(splitAndAdd([4, 2, 5, 3, 2, 5, 7, 9, 0], 5));
