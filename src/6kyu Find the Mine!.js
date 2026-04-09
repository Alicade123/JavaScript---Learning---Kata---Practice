function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }
}

console.log(
  mineLocation([
    [1, 0],
    [0, 0],
  ])
);

console.log(
  mineLocation([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
  ])
);
