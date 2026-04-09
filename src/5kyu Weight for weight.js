function orderWeight(strng) {
  return strng
    .trim()
    .split(/\s+/)
    .sort((a, b) => {
      const weightA = a
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);
      const weightB = b
        .split("")
        .reduce((sum, digit) => sum + parseInt(digit), 0);

      if (weightA === weightB) {
        return a.localeCompare(b); 
      }
      return weightA - weightB;
    })
    .join(" ");
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));
