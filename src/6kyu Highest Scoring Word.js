function high(x) {
  x = x.trim().split(" ");
  let scores = [];
  for (let i = 0; i < x.length; i++) {
    const y = x[i];
    let sum = 0;
    for (let j = 0; j < y.length; j++) {
      sum += y[j].charCodeAt() - 96;
    }
    scores.push(sum);
  }
  return x[scores.indexOf(Math.max(...scores))];
}
console.log(high("man i need a taxi up to ubud")); // "taxi");
console.log(high("what time are we climbing up the volcano")); //    "volcano"  );
console.log(high("take me to semynak")); // "semynak");
console.log(high("aa b")); // "aa");
console.log(high("b aa")); // "b");
console.log(high("bb d")); // "bb");
console.log(high("d bb")); // "d");
console.log(high("aaa b")); // "aaa");
