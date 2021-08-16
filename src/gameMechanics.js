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



