function* generator(a, b) {
  let x = a;
  let table = "";
  while (x <= b) {
    for (let i = 1; i <= 10; i++) {
      table += `${x} x ${i} = ${x * i} \n`;
    }

    x++;
  }
  yield table;
}
const generatorIterator = generator(2, 3);
console.log(generatorIterator.next().value);
