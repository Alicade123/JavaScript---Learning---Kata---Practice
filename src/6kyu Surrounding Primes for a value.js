const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
function primeBefAft(num) {
  let down = num - 1;
  let up = num + 1;
  while (down > 1 && !isPrime(down)) down--;
  while (!isPrime(up)) up++;
  return [down, up];
}

console.log(primeBefAft(100)); // [97, 101]
console.log(primeBefAft(97)); // [89, 101]
console.log(primeBefAft(101)); // [97, 103]
console.log(primeBefAft(120)); // [113, 127]
console.log(primeBefAft(130)); // [127, 131]
