function addUsername(list) {
  const newDate = new Date();
  return list.map((obj) => ({
    ...obj,
    username: `${obj.firstName.toLowerCase()}${obj.lastName
      .slice(0, 1)
      .toLowerCase()}${newDate.getFullYear() - obj.age}`,
  }));
}
var list1 = [
  {
    firstName: "Emily",
    lastName: "N.",
    country: "Ireland",
    continent: "Europe",
    age: 30,
    language: "Ruby",
  }, //username: 'emilyn1990'
  {
    firstName: "Nor",
    lastName: "E.",
    country: "Malaysia",
    continent: "Asia",
    age: 20,
    language: "Clojure",
  }, //  username: 'nore2000'
];
console.log(addUsername(list1));
