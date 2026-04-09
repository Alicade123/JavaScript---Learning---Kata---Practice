function sum(...parm) {
  return parm.reduce((a, b) => a + b, 0);
}
console.log(sum(1920,10))