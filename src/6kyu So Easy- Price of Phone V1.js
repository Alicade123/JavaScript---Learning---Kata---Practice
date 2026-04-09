function salePrice(cost) {
  let newCost = Math.trunc(cost + (cost * 15) / 100);

  let lastDigit = newCost % 10;

  if (lastDigit === 0 || lastDigit === 5) {
    return newCost;
  } else if (lastDigit < 5) {
    return newCost - lastDigit; 
  } else {
    return newCost + (10 - lastDigit); 
  }
}

console.log(salePrice(800)); //920
console.log(salePrice(600)); //690
console.log(salePrice(700)); //805
console.log(salePrice(120)); //140
console.log(salePrice(1002)); //140
console.log(salePrice(199)); //140
