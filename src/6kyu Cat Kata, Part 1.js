function peacefulYard(yard, minDistance) {
  const catSymbols = ["L", "M", "R"];
  const positions = [];

  for (let i = 0; i < yard.length; i++) {
    for (let j = 0; j < yard[i].length; j++) {
      if (catSymbols.includes(yard[i][j])) {
        positions.push([i, j]);
      }
    }
  }

  if (positions.length <= 1) return true;

  // Step 3: Check distances between all pairs
  for (let a = 0; a < positions.length; a++) {
    for (let b = a + 1; b < positions.length; b++) {
      const [x1, y1] = positions[a];
      const [x2, y2] = positions[b];
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      if (distance < minDistance) return false;
    }
  }

  // Step 4: No conflicts found
  return true;
}

console.log(
  peacefulYard(
    [
      "------------",
      "---M--------",
      "------------",
      "------------",
      "-------R----",
      "------------",
    ],
    6
  )
); // → false
