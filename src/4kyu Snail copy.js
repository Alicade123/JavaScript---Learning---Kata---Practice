const snail = (matrix) => {
  const result = [];
  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // ➡️ Traverse top
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col]);
    }
    startRow++;

    // ⬇️ Traverse right
    for (let row = startRow; row <= endRow; row++) {
      result.push(matrix[row][endCol]);
    }
    endCol--;

    // ⬅️ Traverse bottom
    if (startRow <= endRow) {
      for (let col = endCol; col >= startCol; col--) {
        result.push(matrix[endRow][col]);
      }
      endRow--;
    }

    // ⬆️ Traverse left
    if (startCol <= endCol) {
      for (let row = endRow; row >= startRow; row--) {
        result.push(matrix[row][startCol]);
      }
      startCol++;
    }
  }

  return result;
};
console.log(
  snail([
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ])
);

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
