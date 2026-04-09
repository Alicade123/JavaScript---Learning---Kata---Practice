function allContinents(list) {
  const preLoadedContinents = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];
  let continentsAvailable = [];
  for (const element of list) {
    continentsAvailable.push(element.continent);
  }
  for (const ele of preLoadedContinents) {
    if (!continentsAvailable.includes(ele)) return false;
  }
  return true;
}
var list1 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];
var list2 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
];

console.log(allContinents(list1));
console.log(allContinents(list2));
