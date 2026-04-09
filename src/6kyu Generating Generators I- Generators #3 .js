// Inner generator: yields one multiplication table
function* multiplicationTable(a) {
  for (let i = 1; i <= 10; i++) {
    yield `${a} x ${i} = ${a * i}`;
  }
}

// Outer generator: yields multiple multiplication table generators
function* generate(start, end) {
  for (let x = start; x <= end; x++) {
    yield multiplicationTable(x);
  }
}

const tables = generate(1, 3);

for (const tableGen of tables) {
  for (const line of tableGen) {
    console.log(line);
  }
  console.log("---"); // separator between tables
}
