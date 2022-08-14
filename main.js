let playerScore = 0;
let computerScore = 0;
let roundWinner = "0";


function getComputerChoice(){
    let randomChoices = Math.floor(Math.random()*3);
    switch (randomChoices){
        case 0: 
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection === computerSelection){
        console.log("its a tie")
    }
    else  if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        console.log("Player win");
      }
        else if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        console.log("Computer Win");
    
      }else{
        console.log("Invalid Input");
      }
  }

  const promptSelection = prompt("Select Here:");
  const playerSelection = promptSelection.toUpperCase();
  const computerSelection = getComputerChoice();
  console.log("Player: " + playerSelection, "VS" + "Computer: "+ computerSelection);
  console.log(playRound(playerSelection, computerSelection));

 

