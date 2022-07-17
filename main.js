
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

function getPlayerChoice(choices)
{
  let validChoice = false;
  let inputAttempts = 0;
  let choice;

  while(validChoice === false)
  {
    choice = prompt("Enter your choice: ");
    inputAttempts++;

    // validate input
    choice = choice.toLowerCase();
    if(choice === "rock" || choice === "paper" || choice === "scissors")
      validChoice = true;
    else
      console.log("Please choose one of the following options: Rock, Paper, or Scissors");
    
      if(inputAttempts === 3)
        return null;
  }
  return choice;
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
    playerSelection = getPlayerChoice(choices);
    if(playerSelection != null)
    {
      computerSelection = getComputerChoice(choices);
      roundWinner = playRound(playerSelection, computerSelection);
    }
    else
    {
      roundWinner = "Computer";
      console.log("You have failed to input a choice 3 times, therefore the Computer wins this round by default!")
    }
    incrementPoints(roundWinner, points);
  }

  gameWinner = getWinner(points);
  console.log("The " + gameWinner + " wins!");
  console.log("FINAL SCORE: Player " + points[0] + " - Computer: " + points[1]);
}

game();