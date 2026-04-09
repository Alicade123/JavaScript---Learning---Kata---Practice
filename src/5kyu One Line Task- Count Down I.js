// countDown = (n) => [n + 2, n + 1, n].join("!");
// countDown = (n) => n + 2 + "!" + (n + 1) + "!" + n;
// console.log(countDown(5));

// const myAray = Array.from({ length: 5 }, function () {
//   return Array(4).fill("-");
// });
// console.log(myAray);
// console.log(22 / 7);

// const x = (22 / 7).toFixed(2);
// console.log(x);
// console.log(Math.ceil(x));
// console.log(Math.floor(x));
// console.log(Math.trunc(x));
// console.log(Math.round(x));
// console.log(Math.fround(x));

const id = Symbol("id");
// console.log(id.description);

const myObj = {
  name: "Alicade",
  age: 23,
  location: "Kigali city",
  [id]: 51,
};
for (const key in myObj) {
  // if (Object.prototype.hasOwnProperty.call(object, key)) {
  //   const element = object[key];

  // }
  console.log(key);
  console.log(`${key}` in myObj);
}

console.log(myObj.hasOwnProperty("ageX"));
Object.defineProperty(myObj, "age", {
  value: 100,
  writable: true,
});
console.log(myObj.age);

const x = "kigali";
console.log(x);
