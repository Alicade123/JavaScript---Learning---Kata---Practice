function greetDevelopers(list) {
  return list.map((li) => ({
    ...li,
    greeting: `Hi ${li.firstName}, what do you like the most about ${li.language}?`,
  }));
}
const list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];
console.log(greetDevelopers(list1));
