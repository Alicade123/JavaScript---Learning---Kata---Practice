function wave(str) {
  const results = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    let wavedStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);

    results.push(wavedStr);
  }

  return results;
}

console.log(wave("gap"));
console.log(wave("Hello"));
