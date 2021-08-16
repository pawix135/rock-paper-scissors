import { Paper, Rock, Scissors } from './Components/moves';
var choices = ["rock", "paper", "scissors"];
var map = {};

choices.forEach(function (choice, i) {
  map[choice] = {};
  map[choice][choice] = 'tie';
  map[choice][choices[(i + 1) % 3]] = choices[(i + 1) % 3];
  map[choice][choices[(i + 2) % 3]] = choice;
})


export const compare = (player, bot) => {
  console.log('mechanics tests:' + (map[player] || {})[bot] || "Invalid choice");
  return (map[player] || {})[bot] || "Invalid choice"
}



export const pickMove = (setGame, mv) => {

  const choices = ['paper', 'rock', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3)

  let mov;
  let botMove;
  let botRandom = choices[randomNumber];

  switch (mv) {
    case 'paper':
      mov = Paper;
      break;
    case 'rock':
      mov = Rock;
      break;
    case 'scissors':
      mov = Scissors;
      break;
    default:
      break;
  }

  switch (botRandom) {
    case 'paper':
      botMove = Paper;
      break;
    case 'rock':
      botMove = Rock;
      break;
    case 'scissors':
      botMove = Scissors;
      break;
    default:
      break;
  }


  setGame(bf => ({
    ...bf,
    playerMove: mov,
    botMove: botMove,
    played: true,
    isVisible: {
      pick: !bf.isVisible.pick,
      picked: !bf.isVisible.picked,
    }
  }));


}