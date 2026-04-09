function getConsectiveItems(items, key) {
  items = items.toString().split("");
  key = key.toString();
  let foundKeys = [0];
  let count = 1;
  for (let i = 0; i < items.length; i++) {
    if (items[i] === key) {
      if (items[i] === items[i + 1]) count++;
      else {
        foundKeys.push(count);
        count = 1;
      }
    }
  }
  return Math.max(...foundKeys);
}
console.log(getConsectiveItems(90000, 0)); // 4
console.log(getConsectiveItems(90000, 1)); //0
console.log(
  getConsectiveItems(
    "ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii",
    "i"
  )
); // 11
console.log(
  getConsectiveItems(
    "ascasdaiiiasdacasdiiiiicasdasdiiiiiiiiiiisdasdasdiii",
    "z"
  )
); //0
