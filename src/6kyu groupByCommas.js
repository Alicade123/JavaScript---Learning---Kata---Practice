function groupByCommas(n) {
  n = n.toString();
  let result = "";

  let count = 0;
  for (let i = n.length - 1; i >= 0; i--) {
    result = n[i] + result;
    count++;

    // Add comma after every 3 digits, but not at the start
    if (count % 3 === 0 && i !== 0) {
      result = "," + result;
    }
  }

  return result;
}

console.log(groupByCommas(100000000000000000)); // "1,000,000,000,000,000"
