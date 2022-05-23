const playerPlay = document.querySelectorAll('button');
const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand');
const hands = document.querySelectorAll('.hands img');

const result = document.querySelector('.result');
const contentResult = document.createElement('p');
        

// player play (selection)
playerPlay.forEach(button => {
    button.addEventListener('click', function() {

        // player selection
        const playerSelection = this.classList[0];
        // computer options to select
        const computerOptions = ['rock', 'paper', 'scissors'];

        // computer play (selection)
        let computerPlay = Math.floor(Math.random() * computerOptions.length);
        const computerSelection = computerOptions[computerPlay];
    

        // set the img back to rock image
        playerHand.src = `./imgs/player-hand-rock.svg`;
        computerHand.src = `./imgs/computer-hand-rock.svg`;

        //animate before change image
        setTimeout( () => {
            playerHand.style.animation = 'shakeHands 2s ease';
            computerHand.style.animation = 'shakeHands 2s ease';
         }, 5);
        
        //reset animation
        playerHand.style.animation = '';
        computerHand.style.animation = '';
        
        //change image according to player selection and computer selection  

         setTimeout( () => {
            playerHand.src = `./imgs/player-hand-${playerSelection}.svg`;
            computerHand.src = `./imgs/computer-hand-${computerSelection}.svg`;
         }, 2000);

         //display when the player won the round
         const displayWin = (playerSelection, computerSelection) => {

            
            contentResult.classList.add('text-result');
            contentResult.textContent = `You won. ${playerSelection} beats ${computerSelection}`;
            
            result.appendChild(contentResult);
            contentResult.style.animation = 'fadeIn 1s ease'
            
            
        };
        //display when the player lost the round
         const displayLose = (playerSelection, computerSelection) => {
            const result = document.querySelector('.result');
            const contentResult = document.createElement('p');
            
            contentResult.classList.add('text-result');
            contentResult.textContent = `You lost. ${computerSelection} beats ${playerSelection}`;

            result.appendChild(contentResult);
     };
});
});

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
