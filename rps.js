function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let choice; 
    do {
        choice = prompt('Enter rock, paper, or scissors').toLowerCase(); 
    } while (!['rock', 'paper', 'scissors'].includes(choice)); 
    return choice; 
}

function determineWinner(player, computer) {
    if (player === computer) return "It's a tie!"; 
    return (player === 'rock' && computer === 'scissors') || 
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper') ? 'You win!' : 'Computer wins!'
}

function playGame() {
    let playerScore = 0, computerScore = 0; 
    
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice(); 
        const computerChoice = getComputerChoice(); 
        console.log(`You chose: ${playerChoice}`); 
        console.log(`Computer chose: ${computerChoice}`);

        const result = determineWinner(playerChoice, computerChoice); 
        console.log(result); 
        if (result === "You win!") playerScore++; 
        else if (result === "Computer wins!") computerScore++;
    }
    console.log(`Final Score: You = ${playerScore} | Computer = ${computerScore}`); 
    console.log(playerScore > computerScore ? "Congragulations, you've won the game!" : 
                playerScore < computerScore ?  "Computer wins! Better luck next time." :
                "It's a draw!");
}

playGame();

