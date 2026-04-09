function isLanguageDiverse(list) {
  const counts = {};
  for (const dev of list) {
    const lng = dev.language;
    if (counts[lng]) counts[lng]++;
    else counts[lng] = 1;
  }

  const arr = Object.values(counts);
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max <= 2 * min;
}
var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

var list2 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

var list3 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

var list4 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

console.log(isLanguageDiverse(list1)); //false
console.log(isLanguageDiverse(list2)); //false
console.log(isLanguageDiverse(list3)); //true
console.log(isLanguageDiverse(list4)); //true
