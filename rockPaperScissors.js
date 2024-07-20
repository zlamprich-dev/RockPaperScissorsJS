console.log("TEST TEST TEST");
console.log("-".repeat(30));

let playerScore = 0;
let computerScore = 0;
let gameCount = 1;

// Function to handle button clicks
function onButtonClick(event) {
  const buttonId = event.target.id;
  let playerSelect;

  if (buttonId === "rockBtn") {
    playerSelect = "Rock";
    ++gameCount;
  } else if (buttonId === "paperBtn") {
    playerSelect = "Paper";
    ++gameCount;
  } else if (buttonId === "scissorsBtn") {
    playerSelect = "Scissors";
    ++gameCount;
  } else if (buttonId === "Exit") {
    return;
  }
  console.clear();
  console.log(`The current round is: ${gameCount}`);
  return gameLogic(playerSelect, getComputerChoice());
}

function getComputerChoice() {
  const pcChoices = ["Rock", "Paper", "Scissors"];
  const intGrab = Math.floor(Math.random() * pcChoices.length);
  return pcChoices[intGrab];
}

function gameLogic(playerChoice, computerChoice) {
  console.log(`You play ${playerChoice}`);
  console.log(`The computer plays ${computerChoice}`);

  let result;

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    computerScore++;
    result = "The computer wins this round!";
    gameEndCheck();
  } else {
    playerScore++;
    result = "You win this round!";
    gameEndCheck();
  }
  console.log(result);
  console.log(
    `The current score is PC: ${computerScore} - You: ${playerScore}`,
  );
}

// Adding event listeners to buttons
document.getElementById("rockBtn").addEventListener("click", onButtonClick);
document.getElementById("paperBtn").addEventListener("click", onButtonClick);
document.getElementById("scissorsBtn").addEventListener("click", onButtonClick);
if (document.getElementById("Exit")) {
  document.getElementById("Exit").addEventListener("click", onButtonClick);
}

function gameEndCheck() {
  if (playerScore === 10) {
    console.log(
      `You are the winner! Your final score is: ${playerScore}, and the computer had ${computerScore}.`,
    );
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorsBtn").disabled = true;
    computerScore = 0;
    playerScore = 0;
    gameCount = 1;
  }
  if (computerScore === 10) {
    console.log(
      `You lost! Your final score is: ${playerScore}, and the computer had ${computerScore}.`,
    );
    document.getElementById("rockBtn").disabled = true;
    document.getElementById("paperBtn").disabled = true;
    document.getElementById("scissorsBtn").disabled = true;
    playerScore = 0;
    computerScore = 0;
    gameCount = 1;
  }
}
