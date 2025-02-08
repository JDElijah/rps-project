const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const playerHeading = document.querySelector(".player-heading");
const compHeading = document.querySelector(".comp-heading");
const resultHeading = document.querySelector(".result");
const roundHeading = document.querySelector(".round");
const scoreHeading = document.querySelector(".score");

let playerScore = 0; 
let compScore = 0;
let roundNum = 1; 


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    compHeading.textContent = `Computer chose: ${compChoice}`;
    return compChoice;
}

// function getPlayerChoice() {
//     let choice; 
//     do {
//         choice = prompt('Enter rock, paper, or scissors').toLowerCase(); 
//     } while (!['rock', 'paper', 'scissors'].includes(choice)); 
//     return choice; 
// }

function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!"; 
    return (player === 'rock' && computer === 'scissors') || 
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper') ? 'You win!' : 'Computer wins!'
}

function playRound(playerChoice) {

    // let playerScore = 0, computerScore = 0; 
    // const playerChoice = player
    const computerChoice = getComputerChoice(); 
    
    // console.log(`You chose: ${playerChoice}`); 
    // console.log(`Computer chose: ${computerChoice}`);

    const resultOfRound = determineWinner(playerChoice, computerChoice); 
    resultHeading.textContent = `result: ${resultOfRound}`;

    if (resultOfRound === "You win!") {
        playerScore++; 
    } else if (resultOfRound === "Computer wins!") {
        compScore++;
    };
    
    
    // scoreHeading.textContent = `You = ${playerScore} | Computer = ${computerScore}`; 
//     console.log(playerScore > computerScore ? "Congragulations, you've won the game!" : 
//                 playerScore < computerScore ?  "Computer wins! Better luck next time." :
//                 "It's a draw!");
}

// playGame();

const playButtons = document.querySelectorAll(".button-container button")

playButtons.forEach((button) => {
    button.addEventListener("click", () =>  {
        if (roundNum > 5) return; // Prevents further rounds 
        let player; 
        if (button === rockBtn) {
            player = 'rock';
        } else if (button === paperBtn) {
            player = 'paper';
        } else {
            player = 'scissors'; 
        }
        playerHeading.textContent = `Player chose: ${player}`;
        roundHeading.textContent = `Round: ${roundNum}`;
        playRound(player);
        roundNum++
        scoreHeading.textContent =`You = ${playerScore} | Computer = ${compScore}`;
    });
});

