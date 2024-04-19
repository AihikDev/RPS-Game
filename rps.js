// what computer has chosen
function getcomputerChoice() {
    let numberPicked = Math.floor(Math.random() * 3);

    if (numberPicked === 0) {
        computerHasChosen = "rock";
    } else if (numberPicked === 1){
        computerHasChosen = "paper";
    } else {
        computerHasChosen = "scissor";
    }
    return (computerHasChosen);
}

// what player has chosen
function getPlayerChoice() {
    let playerHasChosen = prompt("Please choose: Rock | Paper | Scissor").toLowerCase();
    return(playerHasChosen);
}

// play a round
function playRound() {

    let playerSelection = getPlayerChoice();
    let computerSelection = getcomputerChoice();

    let currentPlayerPoints = 0;
    let currentComputerPoints = 0;
    let currentResult;

    if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")) {
            currentComputerPoints+= 1;
            currentResult = "You Loose!"
    } else if (playerSelection === computerSelection){
        currentResult = "Tie!"
    } else {
        currentPlayerPoints+= 1;
        currentResult = "You win!"
    }
    return {
        currentComputerPoints: currentComputerPoints, 
        currentPlayerPoints: currentPlayerPoints, 
        currentResult: currentResult, 
        playerSelection: playerSelection, 
        computerSelection:computerSelection
    };
}

let totalPlayerPoints = 0;
let totalComputerPoints = 0;

// play the game of 5 rounds
function playGame() {
    for (let rounds = 1; rounds < 6; rounds++) {
        let result = playRound();
        console.log("Round: ", rounds);
        console.log("Player Chose:", result.playerSelection);
        console.log("Computer Chose:", result.computerSelection);
        console.log(`Current score is: Player: ${result.currentPlayerPoints} | Computer: ${result.currentComputerPoints}`);
        totalPlayerPoints+= result.currentPlayerPoints;
        totalComputerPoints+= result.currentComputerPoints;
    }

    console.log(`Player: ${totalPlayerPoints} | Computer: ${totalComputerPoints}`);

    if (totalPlayerPoints > totalComputerPoints) {
        console.log("Congratulations! You won the game.");
    } else if (totalComputerPoints > totalPlayerPoints){
        console.log("You lost the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
