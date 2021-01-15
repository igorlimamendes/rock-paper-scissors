const buttons = document.querySelectorAll(".buttons__btnBox");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const playerPick = document.querySelector(".picks .picks__textBox:nth-of-type(1) p");
const computerPick = document.querySelector(".picks .picks__textBox:nth-of-type(2) p");
const playerScore = document.querySelector(".headings .headings__titleBox:nth-of-type(1) h3");
const computerScore = document.querySelector(".headings .headings__titleBox:nth-of-type(2) h3");
const reset = document.querySelector(".reset__btnBox--button");
let playScore = 0;
let compScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        // User have click in one of the three buttons
        let userClickBtn = event.target;

        function computerPlay() {
            let computerPlay = Math.floor(Math.random() * (4 - 1)) + 1; // Generate random number between 1 and 3
            
            return computerPlay === 1 ? "rock" : computerPlay === 2 ? "paper" : "scissors";
        }

        let computerSelection = computerPlay();

        playerPick.innerHTML = `Player: ${userClickBtn.id.charAt(0).toUpperCase() + userClickBtn.id.slice(1)}`;
        computerPick.innerHTML = `Computer: ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}`;

        if (userClickBtn === btnRock) {
            if (computerSelection === "scissors") {
                playScore++;
                playerScore.innerHTML = playScore;
            } else if (computerSelection === "paper") {
                compScore++;
                computerScore.innerHTML = compScore;
            }
        } else if (userClickBtn === btnPaper) {
            if (computerSelection === "rock") {
                playScore++;
                playerScore.innerHTML = playScore;
            } else if (computerSelection === "scissors") {
                compScore++;
                computerScore.innerHTML = compScore;
            }
        } else {
            if (computerSelection === "paper") {
                playScore++;
                playerScore.innerHTML = playScore;
            } else if (computerSelection === "rock") {
                compScore++;
                computerScore.innerHTML = compScore;
            }
        }
    });

    reset.addEventListener("click", () => {
        playerPick.innerHTML = "Player: ????????";
        computerPick.innerHTML = "Computer: ????????";
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        playScore = 0;
        compScore = 0;
    });
});
