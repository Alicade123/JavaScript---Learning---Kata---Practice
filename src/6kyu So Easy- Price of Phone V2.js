function salePrice(input) {
  return input
    .trim()
    .split("\n")
    .map((line) => {
      const match = line.match(/^(.+?) cost price: \$(\d+)$/);
      if (!match) return "";

      const name = match[1].trim();
      const cost = parseInt(match[2], 10);

      // Calculate with 15% profit and handle floating point precision
      const withProfit = cost * 1.15;
      let sale = Math.round(withProfit + 0.001); // Add small epsilon to handle floating point errors

      // Force last digit to be 5 or 0 (always round UP)
      const lastDigit = sale % 10;
      if (lastDigit !== 0 && lastDigit !== 5) {
        if (lastDigit <= 4) {
          sale += 5 - lastDigit; // Round up to nearest 5
        } else {
          sale += 10 - lastDigit; // Round up to nearest 10
        }
      }

      return `${name} sale price: $${sale}`;
    })
    .join("\n");
}
const input = `\
iPhone 7 cost price: $370
Samsung note 7 cost price: $600
iPad pro cost price: $383`;
console.log(salePrice(input));
