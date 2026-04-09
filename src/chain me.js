function chain(input, fs) {
  return fs.reduce((result, fn) => fn(result), input);
}

function div(num) {
  return num / 2;
}
function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult, div])); 
