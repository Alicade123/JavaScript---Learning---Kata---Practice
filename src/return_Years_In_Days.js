function ageInDays(year, month, day) {
  // Note: JavaScript Date expects month as 0-based (Jan = 0)
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = today - birthDate;

  // Convert milliseconds to days
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  return `You are ${diffInDays} days old`;
}

console.log(ageInDays(2024, 4, 1));
console.log(ageInDays(2007, 11, 27));
