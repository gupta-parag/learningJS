function returnCard() {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "K", "Q", "J"];
  const suits = ["spade", "diamond", "heart", "club"];
  return {
    card: cards[Math.floor(Math.random() * cards.length)],
    suit: suits[Math.floor(Math.random() * suits.length)],
  };
}

console.log(returnCard());
