function getComputerChoice() {

    let randomNumberPicked = Math.floor((Math.random()*3)+1);
    let computerChoice;
    if (randomNumberPicked === 1) {
        computerChoice = "rock";
    } else if (randomNumberPicked === 2){
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }
    return computerChoice;
}

let computerSelection= "";
let playerSelection="";
let roundResult;

function playRound() {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice below: Rock | Paper | Scissors").toLowerCase();

    if ((computerSelection === "rock" && playerSelection === "paper") ||
       (computerSelection === "paper" && playerSelection === "scissor") ||
       (computerSelection === "scissor" && playerSelection === "rock"))
    {
        playerPoints+= 1;
        roundResult = `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}.`;
    } else if (computerSelection === playerSelection){
        roundResult = "It's a Tie!";
    } else{
        computerPoints+= 1;
        roundResult = `You Loose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}.`;
    }
    return (computerSelection, playerSelection, roundResult, computerPoints, playerPoints);

}

let computerPoints = 0;
let playerPoints = 0;

function playGame() {
    for (let rounds = 1; rounds < 6; rounds++) {
        playRound();
    console.log(`ROUND: ${rounds}`); 
    console.log(roundResult);
    console.log(`Computer Choice: ${computerSelection} || Player Choice: ${playerSelection}`);
    console.log(`Computer Points: ${computerPoints} || Player Points: ${playerPoints}`);
    }

    if (playerPoints > computerPoints) {
        gameResult =  "Congratulations! You won the game."
    } else if (computerPoints > playerPoints){
        gameResult = "You lost the game! Better luck next time."
    } else{
        gameResult = "NECK-TO-NECK! Game Tied."
    }
}

playGame();
console.log("GAME RESULT: ", gameResult);
console.log("COMPUTER: ", computerPoints);
console.log("PLAYER: ", playerPoints);