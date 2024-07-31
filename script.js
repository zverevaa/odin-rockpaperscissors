let playerSelection;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const reset = document.querySelector(".reset");

let choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let winningScore = 5;

score.textContent = `Player Score: ${playerScore} vs Computer Score: ${computerScore}`;
scoreText = score.textContent;

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * 3)];
}

rock.addEventListener("click", () => {
    playerSelection = "rock";
    game();
});

paper.addEventListener("click", () => {
    playerSelection = "paper";
    game();
});

scissors.addEventListener("click", () => {
    playerSelection = "scissors";
    game();
});

reset.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    gameOver = false;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    result.textContent = "";
    score.textContent = `Player Score: ${playerScore} vs Computer Score: ${computerScore}`;
});

function game() {
    finalResult = playRound(getComputerChoice(choices), playerSelection);
    result.textContent = finalResult;
    if (!gameOver) {
        if (finalResult == "lose") {
            computerScore++;
            console.log(`CS: ${computerScore}`);
        }
        if (finalResult == "win") {
            playerScore++;
            console.log(`PS: ${playerScore}`);
        }
        if (playerScore == winningScore || computerScore == winningScore) {
            console.log("Game over");
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            gameOver = true;
        }
    }

    if (playerScore == winningScore) {
        result.textContent = "You win.";
    } else if (computerScore == winningScore) {
        result.textContent = "Computer wins.";
    }

    score.textContent = `Player Score: ${playerScore} vs Computer Score: ${computerScore}`;
}

function playRound(computerSelection, playerSelection) {
    let computer = computerSelection.toLowerCase();
    let player = playerSelection.toLowerCase();
    let result;

    if (
        (computer == "scissors" && player == "paper") ||
        (computer == "rock" && player == "scissors") ||
        (computer == "paper" && player == "rock")
    ) {
        result = "lose";
    } else if (computer == player) {
        result = "tie";
    } else {
        result = "win";
    }
    return result;
}
