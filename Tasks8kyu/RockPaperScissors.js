//ОПИСАНИЕ:
// Камень ножницы Бумага Давайте играть! Вы должны вернуть,
// какой игрок выиграл! В случае ничьей верните Draw!.
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!"
  } else if (p1 == "scissors" && p2 == "rock") {
    return "Player 2 won!"
  } else if (p1 == "paper" && p2 == "rock") {
    return "Player 1 won!"
  } else if (p1 == "paper" && p2 == "scissors") {
    return "Player 2 won!"
  } else if (p1 == "rock" && p2 == "scissors") {
    return "Player 1 won!"
  } else if (p1 == "rock" && p2 == "paper") {
    return "Player 2 won!"
  }
};