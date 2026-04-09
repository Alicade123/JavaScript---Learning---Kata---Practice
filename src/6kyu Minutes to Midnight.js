function minutesToMidnight(d) {
  let hours = d.getHours();
  let minutes = d.getMinutes();
  const seconds = d.getSeconds();

  let totamMinutes = hours * 60 + minutes + seconds / 60;
  let minutesLeft = Math.round(1440 - totamMinutes);
  return `${minutesLeft} ${minutesLeft === 1 ? "minute" : "minutes"}`;
}

const date = new Date();
console.log(minutesToMidnight(new Date("2025-10-31T23:59:31")));
console.log(minutesToMidnight(date));
