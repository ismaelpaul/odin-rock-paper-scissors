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

function computerPlay() {
    let computerChoice = Math.ceil(Math.random() * 3)

    if (computerChoice == 1) {
        computerChoice = "Rock"
    } else if (computerChoice == 2) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    console.log(computerChoice);
}

computerPlay();
