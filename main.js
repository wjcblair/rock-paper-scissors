
function getComputerChoice(choices)
{
  const choice = Math.floor(Math.random() * 3);
  console.log("Computer Choice: " + choices[choice]);
  return choices[choice];
}

function playRound(playerSelection, computerSelection)
{
  const playerCompare = playerSelection.toLowerCase();
  const computerCompare = computerSelection.toLowerCase();

  let outcome = '';
  let winner;

  // tie
  if(playerCompare === computerCompare)
  {
    outcome = "It's a Tie! You both chose " + computerSelection +"!";
    winner = null;
  }
  else
  {
    const player = "Player";
    const computer = "Computer";
    const playerOutput = playerCompare.charAt(0).toUpperCase() + playerCompare.slice(1).toLowerCase(); // capitalise players choice for output
    winner = player; // assuming the player wins to avoid extra comparisons in switch and case
    
    // now assuming there is a winner
    switch(playerCompare)
    {
      case "rock":
        if(computerCompare === "paper")
          winner = computer;
        break;
      
      case "paper":
        if(computerCompare === "scissors")
          winner = computer;
        break;
      
      case "scissors":
        if(computerCompare === "rock")
          winner = computer;
        break;
    }
    outcome = "The " + winner + " wins!";
    
    if(winner === computer)
      outcome += " " + computerSelection + " beats " + playerOutput + "!";
    else
    outcome += " " + playerOutput + " beats " + computerSelection + "!";

  }
  
  console.log(outcome);
  return winner;
}

function incrementPoints(winner, points)
{
  console.log(points[0]);
  if(winner === "Player")
    points[0]++;
  else if(winner === "Computer")
    points[1]++;
  console.log("SCORE: Player " + points[0] + " - Computer: " + points[1]);
}

function getWinner(points)
{
  if(points[0] === 3)
    return "Player";
  else
    return "Computer";
}

function game()
{
  const choices = ["Rock", "Paper", "Scissors"];
  let computerSelection;
  let playerSelection;
  let roundWinner;
  let gameWinner;
  let points = [0, 0];

  while(/*player*/points[0] < 3 && /*computer*/points[1] < 3)
  {
    playerSelection = prompt("Enter your choice: ");
    computerSelection = getComputerChoice(choices);
    roundWinner = playRound(playerSelection, computerSelection);
    incrementPoints()
  }

  gameWinner = getWinner(points);
  console.log("The " + gameWinner + " wins!");
  console.log("FINAL SCORE: Player " + points[0] + " - Computer: " + points[1]);
}

game();