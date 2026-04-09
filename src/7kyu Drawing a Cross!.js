function drawACross(n) {
  if (n < 3) {
    return "Not possible to draw cross for grids less than 3x3!";
  } else if (n % 2 === 0) {
    return "Centered cross not possible!";
  } else {
    let results = [];
    let position = n;
    for (let i = 0; i < n; i++) {
      let row = "";

      for (let j = 0; j < n; j++) {
        if (i === j || j === position - 1) row += "X";
        else row += " ";
      }
      position--;
      results.push(row);
    }

    return results.join("\n");
  }
}
console.log(drawACross(1));
console.log(drawACross(8));
console.log(drawACross(7));
