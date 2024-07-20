const prompt = require('prompt-sync')({ sigint: true });

let playerScore = 0;
let computerScore = 0;
let gameCount = 0;

function getHumanChoice() {
    let playerSelection;
    while (true) {
        playerSelection = prompt(`\nRound: ${gameCount + 1} / 5\nCurrent Score - PC: ${computerScore} - You: ${playerScore}\nWelcome to Rock, Paper, Scissors! Please enter a value.\n1: Rock\n2: Paper\n3: Scissors\n4: Exit\nYour choice: `);
        console.log(`Player selected: ${playerSelection}`); // Debugging output

        if (["1", "2", "3", "4"].includes(playerSelection)) {
            break;
        } else {
            console.log("Invalid selection made, prompting again.");
        }
    }

    switch (playerSelection) {
        case "1":
            return "Rock";
        case "2":
            return "Paper";
        case "3":
            return "Scissors";
        case "4":
            console.log("Exiting game!");
            return null;
        default:
            return null;
    }
}

function getComputerChoice() {
    const pcChoices = ["Rock", "Paper", "Scissors"];
    const intGrab = Math.floor(Math.random() * pcChoices.length);
    console.log(`Computer selected: ${pcChoices[intGrab]}`); // Debugging output
    return pcChoices[intGrab];
}

function gameLogic(playerChoice, computerChoice) {
    console.log(`You play ${playerChoice}`);
    console.log(`The computer plays ${computerChoice}`);
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((computerChoice === "Rock" && playerChoice === "Scissors") ||
               (computerChoice === "Paper" && playerChoice === "Rock") ||
               (computerChoice === "Scissors" && playerChoice === "Paper")) {
        computerScore++;
        console.log("The computer wins this round!");
    } else {
        playerScore++;
        console.log("You win this round!");
    }
    console.log(`The current score is PC: ${computerScore} - You: ${playerScore}`);
}

function playGame() {
    console.log("Starting game..."); // Initial debug statement
    for (gameCount = 0; gameCount < 5; gameCount++) {
        const playerChoice = getHumanChoice();
        if (playerChoice === null) {
            console.log("Game exited by user."); // Debugging output
            return;
        }
        const computerChoice = getComputerChoice();
        console.clear();
        console.log(`Round: ${gameCount + 1} / 5`);
        gameLogic(playerChoice, computerChoice);
        console.log(`End of round ${gameCount + 1}`); // Debugging output
    }
    console.clear();
    console.log("Game Over!");
    console.log(`Final Score - PC: ${computerScore} - You: ${playerScore}`);
}

playGame();
