// Query selectors for butns and headings from the HTML doc
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const playerHeading = document.querySelector(".player-heading");
const compHeading = document.querySelector(".comp-heading");
const resultHeading = document.querySelector(".result");
const roundHeading = document.querySelector(".round");
const scoreHeading = document.querySelector(".score");

// variables to score game rounds and player/comp scores 
let playerScore = 0; 
let compScore = 0;
let roundNum = 1; 

const playButtons = document.querySelectorAll(".button-container button")

const choiceMap = {
    rockBtn: "rock 🗿", 
    paperBtn: "paper 🧻",
    scissorsBtn: "scissors ✂️"
};

// Function that randomly selectors rock, paper, or scissors for the computer's choice
function getComputerChoice() {
    const choices = ['rock 🗿', 'paper 🧻', 'scissors ✂️']; 
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    compHeading.textContent = `Computer chose: ${compChoice}`;
    return compChoice;
}

// Function that determines the winner between comp and player. Returns string for tie, win, or loss. 
function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!";

    const winCondition = {
        "rock 🗿": "scissors ✂️",
        "paper 🧻": "rock 🗿", 
       "scissors ✂️": "paper 🧻" 
    };

    return winCondition[player] === computer ? "You win!" : "Computer wins!"; 

}

// Function to play a round of rps, where player choice is given, comp choice is decided, and a winner is determined. Based on result, points are given. 
function playRound(playerChoice) {

    const computerChoice = getComputerChoice(); 
    
    const resultOfRound = determineWinner(playerChoice, computerChoice); 
    resultHeading.textContent = `Result: ${resultOfRound}`;

    if (resultOfRound === "You win!") {
        playerScore++; 
    } else if (resultOfRound === "Computer wins!") {
        compScore++;
    };
}



// For each button, add an event listener that will trigger a round of rps until a 5th round occurs. 
playButtons.forEach((button) => {
    button.addEventListener("click", () =>  {
        if (roundNum > 5) return; // Prevents further rounds 

        const player = choiceMap[button.classList[0]]; // Get choice baesd on class. 
        playerHeading.textContent = `Player chose: ${player}`;
        roundHeading.textContent = `Round: ${roundNum}`;
       
        playRound(player);
        roundNum++
        scoreHeading.textContent =`You = ${playerScore} | Computer = ${compScore}`;
    });
});

// reset button functionality to reset game. 
document.querySelector(".resetBtn").addEventListener("click", () => {
    playerScore = 0;
    compScore = 0;
    roundNum = 1;

    playerHeading.textContent = "[player]";
    compHeading.textContent = "[computer]";
    resultHeading.textContent = "[result]";
    roundHeading.textContent = "[round]";
    scoreHeading.textContent = "[score]";

});

