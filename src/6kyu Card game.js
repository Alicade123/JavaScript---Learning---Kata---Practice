function cardGame(card1, card2, trump) {
  const deck = [
    "joker",
    "2♣",
    "3♣",
    "4♣",
    "5♣",
    "6♣",
    "7♣",
    "8♣",
    "9♣",
    "10♣",
    "J♣",
    "Q♣",
    "K♣",
    "A♣",
    "2♦",
    "3♦",
    "4♦",
    "5♦",
    "6♦",
    "7♦",
    "8♦",
    "9♦",
    "10♦",
    "J♦",
    "Q♦",
    "K♦",
    "A♦",
    "2♥",
    "3♥",
    "4♥",
    "5♥",
    "6♥",
    "7♥",
    "8♥",
    "9♥",
    "10♥",
    "J♥",
    "Q♥",
    "K♥",
    "A♥",
    "2♠",
    "3♠",
    "4♠",
    "5♠",
    "6♠",
    "7♠",
    "8♠",
    "9♠",
    "10♠",
    "J♠",
    "Q♠",
    "K♠",
    "A♠",
  ];
  if (card1 === card2) return "Someone cheats.";
  if (card1 === "joker") return "The first card won.";
  if (card2 === "joker") return "The second card won.";

  const suit1 = card1.slice(-1);
  const suit2 = card2.slice(-1);

  if (suit1 === trump && suit2 !== trump) return "The first card won.";
  if (suit2 === trump && suit1 !== trump) return "The second card won.";

  if (suit1 !== suit2) return "Let us play again.";

  const index1 = deck.indexOf(card1);
  const index2 = deck.indexOf(card2);

  return index1 > index2 ? "The first card won." : "The second card won.";
}

console.log(cardGame("3♣", "Q♣", "♦")); // "The second card won."
console.log(cardGame("5♥", "A♣", "♦")); // "Let us play again."
console.log(cardGame("8♠", "8♠", "♣")); // "Someone cheats."
console.log(cardGame("2♦", "A♠", "♦")); // "The first card won."
console.log(cardGame("joker", "joker", "♦")); // "Someone cheats."
console.log(cardGame("10♣", "joker", "♠")); // "The second card won."
console.log(cardGame("10♣", "3♥", "♣"));
