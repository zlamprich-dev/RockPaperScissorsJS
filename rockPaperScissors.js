let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function getHumanChoice() {
    let playerSelection = prompt(`Welcome to Rock, Paper, Scissors! Please enter a value.
    1: Rock
    2: Paper
    3: Scissors
    4: Exit`);
    switch (playerSelection) {
        case "1":
            playerSelection = "Rock";
            break;
        case "2":
            playerSelection = "Paper";
            break;
        case "3":
            playerSelection = "Scissors";
            break;
        case "4":
            console.log("Exiting game!");
            console.clear();
            return null;
        default:
            console.log("Please enter a valid selection.");
            return getHumanChoice();
    }
    return playerSelection;
}

function getComputerChoice() {
    let pcChoices = ["Rock", "Paper", "Scissors"];
    let intGrab = Math.floor(Math.random() * pcChoices.length);
    let result = pcChoices[intGrab];
    return result;
}

function gameLogic(x, y) {
    console.clear();

    console.log(`You play ${x}`);
    console.log(`The computer plays ${y}`);
    if (y === x) {
        console.log("It's a tie!");
        return;
    }
    if ((y === "Rock" && x === "Scissors") ||
        (y === "Paper" && x === "Rock") ||
        (y === "Scissors" && x === "Paper")) {
        computerScore++;
        console.log("The computer wins this round!");
    } else {
        playerScore++;
        console.log("You win this round!");
    }
    console.log(`The current score is PC: ${computerScore} - You: ${playerScore}`);
}

function playGame() {
    while (gameCount <= 5) {
        console.log(`Round: ${gameCount} / 5`);
        let playerChoice = getHumanChoice();
        if (playerChoice === null) return; // Handle exit
        let computerChoice = getComputerChoice();
        gameLogic(playerChoice, computerChoice);
        gameCount++;
    }
    console.log("Game Over!");
    console.log(`Final Score - PC: ${computerScore} - You: ${playerScore}`);
}

playGame();
