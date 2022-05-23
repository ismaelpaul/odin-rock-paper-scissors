const playerPlay = document.querySelectorAll('button');
const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand')
const hands = document.querySelectorAll('.hands img')
        
// computer options to select
const computerOptions = ['rock', 'paper', 'scissors']
    
// player play (selection)
playerPlay.forEach(button => {
    button.addEventListener('click', function() {

        // computer play (selection)
        let computerPlay = Math.floor(Math.random() * computerOptions.length)
        const computerSelection = computerOptions[computerPlay]

        // set the img back to rock image
        playerHand.src = `./imgs/player-hand-rock.svg`
        computerHand.src = `./imgs/computer-hand-rock.svg`

        //animate before change image
        setTimeout( () => {
            playerHand.style.animation = 'shakeHands 2s ease';
            computerHand.style.animation = 'shakeHands 2s ease';
         }, 5)
        
        //reset animation
        playerHand.style.animation = '';
        computerHand.style.animation = '';
        

        //change image according to player selection and computer selection  

         setTimeout( () => {
            playerHand.src = `./imgs/player-hand-${this.textContent}.svg`
            computerHand.src = `./imgs/computer-hand-${computerSelection}.svg`
         }, 2000)
     }) 
})
  




// function playerPlay() {
//     playerSelection = turnToUpperCase(prompt("Choose rock, paper or scissors"))
//     console.log(playerSelection);
// }

// function turnToUpperCase(playerSelection) {
//     if (playerSelection == playerSelection.toUpperCase() || playerSelection.toLowerCase()) {
//         return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
// }
// } 


    
// COMPUTER SELECTION


// function computerPlay() {
//     computerSelection = Math.ceil(Math.random() * 3)

//     if (computerSelection == 1) {
//        computerSelection = "Rock"
//     } else if (computerSelection == 2) {
//         computerSelection = "Paper"
//     } else {
//         computerSelection = "Scissors"
//     } console.log(computerSelection)
// }

// COMPARES THE RESULTS, SET A WINNER's ROUND AND COUNT WIN'S NUMBER

// let result; 
// let playerWins = 0;
// let computerWins = 0;

// function playRound(playerSelection, computerSelection) {
 

//     if (playerSelection === "Rock" && computerSelection === "Paper") {
//         result = "You Lose! Paper beats Rock"
//         computerWins += 1;
//     } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//         result = "You Won! Rock beats Scissors"
//         playerWins += 1;
//     } else if (playerSelection === "Rock" && computerSelection === "Rock") {
//         result = "Game tied"
//     } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
//         result = "You Lose! Scissors beats Paper"
//         computerWins += 1;
//     } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//         result = "You Won! Paper beats Rock"
//         playerWins += 1;
//     } else if (playerSelection === "Paper" && computerSelection === "Paper") {
//         result = "Game tied"
//     } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
//         result = "You Lose! Rock beats Scissors"
//         computerWins += 1;
//     } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//         result = "You Won! Scissors beats Paper"
//         playerWins += 1;
//     } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
//         result = "Game tied"
//     }
// }


// function game(){
//     for(let i = 1; i < 6; i++) {
//         playerPlay();
//         computerPlay()
//         playRound(playerSelection, computerSelection);
//         console.log(`Player: ${playerWins}`)
//         console.log(`Computer: ${computerWins}`)
//         console.log(result)
//         console.log(i)
//     }
//     if (playerWins > computerWins) {
//         console.log("Congrats, you beat the computer!")
//     } else {
//         console.log("Sorry, the computer beat you!")
//     }
// }
// game()
