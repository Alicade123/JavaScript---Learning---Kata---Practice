function group(arr) {
  const unique = [...new Set(arr)];
  let results = [];
  for (let i = 0; i < unique.length; i++) {
    let subArr = [];
    for (let j = 0; j < arr.length; j++) {
      arr[j] === unique[i] && subArr.push(arr[j]);
    }
    results.push(subArr);
  }
  return results;
}
console.log(group([3, 2, 6, 2, 1, 3])); // [[3, 3], [2, 2], [6], [1]];
console.log(group([3, 2, 6, 2])); // [[3], [2, 2], [6]];
