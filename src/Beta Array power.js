//The first approach
const f = (a) => a.map(() => [...a]);

//The second approach
arrayPower = (a) => a.map((_) => a);

console.log(f([1, 2, 3])); // [[1,2,3],[1,2,3],[1,2,3]]
console.log(f(["a", "b"])); // [['a','b'],['a','b']]
