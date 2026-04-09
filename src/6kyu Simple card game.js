function winner(deckSteve, deckJosh) {
  const cardsScore = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];
  let steveMarks = 0;
  let joshMarks = 0;
  for (let i = 0; i < deckSteve.length; i++) {
    if (
      cardsScore.findIndex((el) => el === deckSteve[i]) >
      cardsScore.findIndex((el) => el === deckJosh[i])
    )
      steveMarks++;
    else if (
      cardsScore.findIndex((el) => el === deckSteve[i]) <
      cardsScore.findIndex((el) => el === deckJosh[i])
    )
      joshMarks++;
  }
  if (steveMarks > joshMarks) return `Steve wins ${steveMarks} to ${joshMarks}`;
  else if (steveMarks < joshMarks)
    return `Josh wins ${joshMarks} to ${steveMarks}`;
  else return "Tie";
}
console.log(winner(["A", "7", "8"], ["K", "5", "9"])); // 'Steve wins 2 to 1'],
console.log(winner(["T", "9"], ["T", "8"])); // 'Steve wins 1 to 0'],
console.log(winner(["T"], ["T"])); ///'Tie'
