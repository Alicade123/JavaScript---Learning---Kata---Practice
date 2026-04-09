function findCharacters(matrix) {
  let mp = new Map();
  for (mat in matrix) {
    if (mp.has(mat)) {
      mp.set(mat, mp.get(mat) + 1);
    } else {
      mp.set(mat, 1);
   
    }
  }
  console.log(mp);
}

console
  .log
  //   findCharacters(
  //     `00000000
  // 0000O000
  // 00000000
  // 00000000
  // 00000000`
  //   )
  ();
findCharacters(
  `00000000
0000O000
00000000
00000000
00000000`,
);
