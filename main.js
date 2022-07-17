
function getComputerChoice(choices)
{
  const choice = Math.floor(Math.random() * 3);
  console.log("Computer Choice: " + choices[choice]);
  return choices[choice];
}