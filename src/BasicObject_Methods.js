const car = {
  Country: "Japan",
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};
car.year = 2050;
delete car.Country;
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
