function looseChange(cents) {
  cents = Math.floor(cents);
  if (cents <= 0) return { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };

  let result = { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };

  result.Quarters = Math.floor(cents / 25);
  cents %= 25;

  result.Dimes = Math.floor(cents / 10);
  cents %= 10;

  result.Nickels = Math.floor(cents / 5);
  cents %= 5;

  result.Pennies = cents;

  return result;
}

console.log(looseChange(56)); //56    { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 }
console.log(looseChange(-435)); //-435  { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
console.log(looseChange(4.935)); //4.935 { Nickels: 0, Pennies: 4, Dimes: 0, Quarters: 0 }
console.log(looseChange(20)); //4.935 { Nickels: 0, Pennies: 0, Dimes: 2, Quarters: 0 }
console.log(looseChange(7.9)); //4.935 { Nickels: 1, Pennies: 2, Dimes: 0, Quarters: 0 }
