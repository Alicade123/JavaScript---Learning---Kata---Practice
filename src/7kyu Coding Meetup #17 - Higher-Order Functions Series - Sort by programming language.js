function sortByLanguage(list) {
  return list.sort((a, b) => {
    const lenguageCompare = a.language.localeCompare(b.language);
    if (lenguageCompare === 0) {
      return a.firstName.localeCompare(b.firstName);
    }
    return lenguageCompare;
  });
}
var list1 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Precious",
    lastName: "G.",
    country: "South Africa",
    continent: "Africa",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];
var list2 = [
  {
    firstName: "Nikau",
    lastName: "R.",
    country: "New Zealand",
    continent: "Oceania",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Maria",
    lastName: "S.",
    country: "Peru",
    continent: "Americas",
    age: 30,
    language: "C",
  },
  {
    firstName: "Agustin",
    lastName: "V.",
    country: "Uruguay",
    continent: "Americas",
    age: 19,
    language: "JavaScript",
  },
];

console.log(sortByLanguage(list1));
// console.log(sortByLanguage(list2));
