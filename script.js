const playerPlay = document.querySelectorAll('button');
const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand');
const hands = document.querySelectorAll('.hands img');

const result = document.querySelector('.result');

        

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
            evaluateRound(playerSelection, computerSelection);
         }, 2000);;
    });
});

let playerScore = 0;
let computerScore = 0;
//display when the player won the round
const displayWin = () => {

    const contentResult = document.querySelector('.result p');
    
    contentResult.classList.add('text-result');

    contentResult.style.animation = '';
    contentResult.style.animation = 'fadeIn 2s ease';

    contentResult.style.cssText = "background-color: #00DCD1;"
    contentResult.textContent = `You won!`;

    const pScore = document.querySelector('.player-score-value');
    playerScore = playerScore + 1;
    pScore.textContent = `${playerScore}`;
    
}
//display when the player lost the round
const displayLose = () => {
    
    const contentResult = document.querySelector('.result p');

    contentResult.classList.add('text-result');
    contentResult.style.cssText = "background-color: #FF85E2;"
    contentResult.textContent = `You lost!`;

    
    const cScore = document.querySelector('.computer-score-value');
    computerScore = computerScore + 1;
    cScore.textContent = `${computerScore}`;
 };

//display when the player lost the round
const displayTied = () => {

    const contentResult = document.querySelector('.result p');

    contentResult.classList.add('text-result');
    contentResult.style.cssText = "background-color: #c2c2c2;"
    contentResult.textContent = `Game tied.`;
        
}

// COMPARES THE RESULTS, SET A WINNER's ROUND AND COUNT WIN'S NUMBER


const evaluateRound = (playerSelection, computerSelection) => {

    //player selects rock
    if (playerSelection === 'rock') computerSelection === 'scissors' ? displayWin(playerScore) : computerSelection === 'paper' ? displayLose(computerScore) : displayTied()

    //player selects paper
    if (playerSelection === 'paper') computerSelection === 'rock' ? displayWin() : computerSelection === 'scissors' ? displayLose() : displayTied()

    //player selects scissors
    if (playerSelection === 'scissors') computerSelection === 'paper' ? displayWin() : computerSelection === 'rock' ? displayLose() : displayTied()
}


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