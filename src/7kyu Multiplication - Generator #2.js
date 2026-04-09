function* generator(a) {
  let b = 1;
  while (true) {
    yield `${a} x ${b} = ${a * b}`;
    b++;
  }
}
const generatorIterator = generator(10);
console.log(generatorIterator.next().value);
console.log(generatorIterator.next().value);
console.log(generatorIterator.next().value);
console.log(generatorIterator.next().value);
console.log(generatorIterator.next().value);
