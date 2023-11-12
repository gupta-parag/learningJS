// Rolling dice function

function diceRoll() {
  return Math.ceil(Math.random() * 6);
}

function rollDice() {
  console.log(diceRoll());
  console.log(diceRoll());
  console.log(diceRoll());
  console.log(diceRoll());
  console.log(diceRoll());
}

rollDice();
