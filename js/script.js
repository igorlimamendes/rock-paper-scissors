// Variables
const buttons = document.querySelectorAll(".buttons__btnBox");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerPick = document.querySelector(".picks .picks__textBox:nth-of-type(1) p");
const computerPick = document.querySelector(".picks .picks__textBox:nth-of-type(2) p");
const playerScore = document.querySelector(".headings .headings__titleBox:nth-of-type(1) h3");
const computerScore = document.querySelector(".headings .headings__titleBox:nth-of-type(2) h3");
const reset = document.querySelector(".resetBtn");
let playScore = 0;
let compScore = 0;

// Buttons boxes section
buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        // Player have click in one of the three buttons
        let playerClickBtn = event.target;

        // Generate computer's random value
        function computerPlay() {
            let computerPlay = Math.floor(Math.random() * (4 - 1)) + 1; // Random number between 1 and 3
            
            return computerPlay === 1 ? "rock" : computerPlay === 2 ? "paper" : "scissors";
        }

        let computerSelection = computerPlay();

        // Change picks default text to player and computer pick values
        playerPick.innerHTML = `Player: ${playerClickBtn.id.charAt(0).toUpperCase() + playerClickBtn.id.slice(1)}`; // Turn pick first letter uppercase
        computerPick.innerHTML = `Computer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`; // Turn pick first letter uppercase

        // Game logic
        if (playerClickBtn === btnRock) { // Player have pick Rock
            if (computerSelection === "scissors") {
                playScore++;
                playerScore.innerHTML = playScore;
            } else if (computerSelection === "paper") {
                compScore++;
                computerScore.innerHTML = compScore;
            }
        } else if (playerClickBtn === btnPaper) { // Player have pick Paper
            if (computerSelection === "rock") {
                playScore++;
                playerScore.innerHTML = playScore;
            } else if (computerSelection === "scissors") {
                compScore++;
                computerScore.innerHTML = compScore;
            }
        } else { // Player have pick Scissors
            if (computerSelection === "paper") {
                playScore++;
                playerScore.innerHTML = playScore;
            } else if (computerSelection === "rock") {
                compScore++;
                computerScore.innerHTML = compScore;
            }
        }
    });
});

// Reset to default values
reset.addEventListener("click", () => {
    playerPick.innerHTML = "Player: ????????";
    computerPick.innerHTML = "Computer: ????????";
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
    playScore = 0;
    compScore = 0;
});
