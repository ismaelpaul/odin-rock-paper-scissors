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

// PLAYER SELECTION

let playerSelection;

function playerPlay() {
    playerSelection = turnToUpperCase(prompt("Choose rock, paper or scissors"))
    console.log(playerSelection);
}

function turnToUpperCase(playerSelection) {
    if (playerSelection == playerSelection.toUpperCase() || playerSelection.toLowerCase()) {
        return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
}
}

// COMPUTER SELECTION

let computerSelection;

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

// COMPARES THE RESULTS AND SET A WINNER

let result; 

function playRound(playerSelection, computerSelection) {


    if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You Lose! Paper beats Rock"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "You Won! Rock beats Scissors"
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        result = "Game tied"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You Lose! Scissors beats Paper"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "You Won! Paper beats Rock"
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = "Game tied"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You Lose! Rock beats Scissors"
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "You Won! Scissors beats Paper"
    } else {
        result = "Game tied"
}
}

function game(){
    for(let i = 1; i <= 5; i++) {
        playerPlay();
        computerPlay()
        playRound(playerSelection, computerSelection);
        console.log(result)
        console.log(i)
    }
}

// playerPlay();
// computerPlay();
game()
// playRound(playerSelection, computerSelection);