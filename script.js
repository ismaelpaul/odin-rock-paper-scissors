// Does your program have an interface?
// No, it will be a browser console program (for now)
// The only user interaction will be allowing users to enter data( rock, paper or scissors).


// What inputs will your program have? Will the user enter data or will you get input from somewhere else? 
// The user will enter data (rock, paper or scissors) from a prompt (popup box).

// What’s the desired output?
// 1- Is to compare the user input with the computer choice
// 2- Print in the console if the user won or lost
// 3- Count either the user's or computer's won rounds
// 4- End the game when either the user or the computer has 5 wins


let playerSelection;
let computerSelection;

function playerPlay() {
    playerSelection = prompt("Choose rock, paper or scissors")
    console.log(playerSelection);
    return playerSelection;
}

function computerPlay() {
    computerSelection = Math.ceil(Math.random() * 3)

    if (computerSelection == 1) {
       computerSelection = "Rock"
    } else if (computerSelection == 2) {
        computerSelection = "Paper"
    } else {
        computerSelection = "Scissors"
    } console.log(computerSelection)
}


function playRound(playerSelection, computerSelection) {
   
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose! Paper beats Rock") 
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Won! Rock beats Scissors")
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("Game tied")
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose! Scissors beats Paper")
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Won! Paper beats Rock")
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("Game tied")
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose! Rock beats Scissors")
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Won! Scissors beats Paper")
    } else {
        console.log("Game tied")    
}
}
playerPlay();
computerPlay();
playRound(playerSelection, computerSelection);
