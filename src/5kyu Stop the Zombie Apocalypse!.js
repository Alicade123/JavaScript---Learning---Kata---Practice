function findZombies(matrix) {
  const target = matrix[0][0];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  const queue = [[0, 0]];

  if (matrix[0][0] !== target) return result;

  result[0][0] = 1;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [i, j] = queue.shift();
    for (const [di, dj] of directions) {
      const ni = i + di,
        nj = j + dj;
      if (
        ni >= 0 &&
        ni < rows &&
        nj >= 0 &&
        nj < cols &&
        matrix[ni][nj] === target &&
        result[ni][nj] === 0
      ) {
        result[ni][nj] = 1;
        queue.push([ni, nj]);
      }
    }
  }

  return result;
}

var exampleMatrix = [
  [6, 6, 6, 6, 6, 4, 1],
  [6, 6, 6, 6, 6, 3, 0],
  [3, 5, 5, 2, 6, 6, 7],
  [3, 1, 6, 6, 6, 1, 8],
  [1, 1, 6, 6, 6, 3, 0],
  [8, 6, 6, 8, 9, 6, 1],
  [6, 1, 6, 8, 6, 2, 6],
];

console.log(findZombies(exampleMatrix));
