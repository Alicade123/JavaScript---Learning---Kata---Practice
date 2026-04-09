function cubeOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
  }
  return arr
    .filter((element) => element % 2 !== 0)
    .map((n) => n ** 3)
    .reduce((s, c) => s + c, 0);
}
console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([1, 2, 3, , 4])); // undefined
