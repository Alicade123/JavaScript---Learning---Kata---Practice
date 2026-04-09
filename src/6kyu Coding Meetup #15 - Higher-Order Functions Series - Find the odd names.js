function findOddNames(list) {
  const result = [];
  list.map((obj) => {
    let firstNameASCIIValue = obj.firstName
      .split("")
      .reduce((sum, x) => sum + x.charCodeAt(0), 0);
    if (firstNameASCIIValue % 2 !== 0) result.push(obj);
  });
  return result;
}

let list1 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];

let list2 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
];

console.log(findOddNames(list1));
console.log(findOddNames(list2));
