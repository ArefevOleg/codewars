// Description
// Let's play! You have to return which player won! In case of a draw return Draw!.
// Examples(Input1, Input2 --> Output):
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"


// Decision:

const rps = (p1, p2) => {
  if(p1===p2){
    return "Draw!"
  } 
  
  const rules = {scissors:"paper", paper:"rock", rock:"scissors"}
  
  if(p2 === rules[p1]){
  return "Player 1 won!"
  } 
  return "Player 2 won!"
};