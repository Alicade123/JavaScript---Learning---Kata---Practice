function getAverageAge(list) {
  let ageSum = 0;
  list.map((obj) => (ageSum += obj.age));
  return Math.round(ageSum / list.length);
}
var list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

var list2 = [
  {
    firstName: "Noa",
    lastName: "A.",
    country: "Israel",
    continent: "Asia",
    age: 20,
    language: "Ruby",
  },
  {
    firstName: "Andrei",
    lastName: "E.",
    country: "Romania",
    continent: "Europe",
    age: 21,
    language: "C",
  },
];

console.log(getAverageAge(list1));
console.log(getAverageAge(list2));
