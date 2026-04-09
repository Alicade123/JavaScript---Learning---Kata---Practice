function removeEveryOther(arr) {
  let remained = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      remained.push(arr[i]);
    }
  }
  return remained;
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
