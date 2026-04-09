function looseChange(cents) {
  cents = Math.floor(cents);
  if (cents <= 0) {
    return { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 };
  } else {
    let Nickels = 0;
    let Pennies = 0;
    let Dimes = 0;
    let Quarters = 0;

    Quarters = Math.floor(cents / 25);
    Dimes = Math.floor((cents % 25) / 10);
    Nickels = Math.floor(((cents % 25) % 10) / 5);
    Pennies = Math.floor((((cents % 25) % 10) % 5) / 1); //Pennies = Math.floor(((cents % 25) % 10) % 5);

    return {
      Nickels: Nickels,
      Pennies: Pennies,
      Dimes: Dimes,
      Quarters: Quarters,
    };
  }
}

console.log(looseChange(56)); //56    { Nickels: 1, Pennies: 1, Dimes: 0, Quarters: 2 }
console.log(looseChange(-435)); //-435  { Nickels: 0, Pennies: 0, Dimes: 0, Quarters: 0 }
console.log(looseChange(4.935)); //4.935 { Nickels: 0, Pennies: 4, Dimes: 0, Quarters: 0 }
console.log(looseChange(20)); //4.935 { Nickels: 0, Pennies: 0, Dimes: 2, Quarters: 0 }
console.log(looseChange(7.9)); //4.935 { Nickels: 1, Pennies: 2, Dimes: 0, Quarters: 0 }
