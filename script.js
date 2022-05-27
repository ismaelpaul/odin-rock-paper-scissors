const playerPlay = document.querySelectorAll('.player-buttons button');
const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand');
const hands = document.querySelectorAll('.hands img');

const result = document.querySelector('.result');

const contentResult = document.querySelector('.result p');


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
         }, 2000);

         //removes any text content before the round is evaluated
         contentResult.classList.remove('text-result');
         contentResult.style.cssText = "none";
         contentResult.textContent = ``;

    });
});

let playerScore = 0;
let computerScore = 0;
//display when the player won the round
const displayWin = () => {

    const contentResult = document.querySelector('.result p');
    
    contentResult.classList.add('text-result');

<<<<<<< HEAD
    contentResult.style.animation = '';
    contentResult.style.animation = 'fadeIn 2s ease';
=======
// COMPARES THE RESULTS, SET A WINNER's ROUND AND COUNT WIN'S NUMBER
>>>>>>> origin

    contentResult.style.cssText = "background-color: #00DCD1";
    contentResult.textContent = `You won!`;

    const pScore = document.querySelector('.player-score-value');
    playerScore = playerScore + 1;
    pScore.textContent = `${playerScore}`;

    // score animation
    setTimeout( () => {
        pScore.style.animation = 'score .5s ease';
    }, 5);

    // reset animation
    pScore.style.animation = '';
};

//display when the player lost the round
const displayLose = () => {
    
    const contentResult = document.querySelector('.result p');

    contentResult.classList.add('text-result');
    contentResult.style.cssText = "background-color: #FF85E2";
    contentResult.textContent = `You lost!`;


<<<<<<< HEAD
    const cScore = document.querySelector('.computer-score-value');
    computerScore = computerScore + 1;
    cScore.textContent = `${computerScore}`;

    // score animation
    setTimeout( () => {
        cScore.style.animation = 'score .5s ease';
    }, 5);
    
    // reset animation
    cScore.style.animation = '';
 };

//display when the player lost the round
const displayTied = () => {

    const contentResult = document.querySelector('.result p');

    contentResult.classList.add('text-result');
    contentResult.style.cssText = "background-color: #c2c2c2";
    contentResult.textContent = `Game tied!`;
        
};

// COMPARES THE RESULTS, SET A WINNER's ROUND AND COUNT WIN'S NUMBER


const evaluateRound = (playerSelection, computerSelection) => {

    //player selects rock
    if (playerSelection === 'rock') computerSelection === 'scissors' ? displayWin() : computerSelection === 'paper' ? displayLose() : displayTied();

    //player selects paper
    if (playerSelection === 'paper') computerSelection === 'rock' ? displayWin() : computerSelection === 'scissors' ? displayLose() : displayTied();

    //player selects scissors
    if (playerSelection === 'scissors') computerSelection === 'paper' ? displayWin() : computerSelection === 'rock' ? displayLose() : displayTied();

    // finishes the game with 5 wins
    if (playerScore == 5 && computerScore < 5) displayPlayerWin();
    if (computerScore == 5 && playerScore < 5) displayComputerWin();
};

//displays if player won
const displayPlayerWin = () => {

    //adds active classes and text
    const endgame = document.querySelector('.end-game');
    const overlay = document.querySelector('.overlay-end');
    const winnerText = document.querySelector('.end-game-message')

    endgame.classList.add('active')
    overlay.classList.add('active')
    winnerText.textContent = `Congratulations! You beat the computer`;

    //reload the page
    const gameRestart = document.querySelector('.end-game button')

    gameRestart.addEventListener('click', () =>
    location.reload())
};

//displays if computer won
const displayComputerWin = () => {

    //adds active classes and text
    const endgame = document.querySelector('.end-game');
    const overlay = document.querySelector('.overlay-end');
    const winnerText = document.querySelector('.end-game-message')

    endgame.classList.add('active')
    overlay.classList.add('active')
    winnerText.textContent = `Sorry! The computer beat you`;

    //reload the page
    const gameRestart = document.querySelector('.end-game button')

    gameRestart.addEventListener('click', () =>
    location.reload())
};
=======
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You Lose! Paper beats Rock"
        computerWins += 1;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "You Won! Rock beats Scissors"
        playerWins += 1;
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        result = "Game tied"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You Lose! Scissors beats Paper"
        computerWins += 1;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "You Won! Paper beats Rock"
        playerWins += 1;
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        result = "Game tied"
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You Lose! Rock beats Scissors"
        computerWins += 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "You Won! Scissors beats Paper"
        playerWins += 1;
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        result = "Game tied"
    }
}


function game(){
    for(let i = 1; i < 6; i++) {
        playerPlay();
        computerPlay()
        playRound(playerSelection, computerSelection);
        console.log(`Player: ${playerWins}`)
        console.log(`Computer: ${computerWins}`)
        console.log(result)
        console.log(i)
    }
    if (playerWins > computerWins) {
        console.log("Congrats, you beat the computer!")
    } else {
        console.log("Sorry, the computer beat you!")
    }
}

game()
>>>>>>> origin
