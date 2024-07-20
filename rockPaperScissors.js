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
  updateRoundNumber(gameCount);
  return gameLogic(playerSelect, getComputerChoice());
}

function getComputerChoice() {
  const pcChoices = ["Rock", "Paper", "Scissors"];
  const intGrab = Math.floor(Math.random() * pcChoices.length);
  return pcChoices[intGrab];
}

function gameLogic(playerChoice, computerChoice) {
  updatePlayerChoice(playerChoice);
  updateComputerChoice(computerChoice);

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
  updateResult(result);
  updateScore(playerScore, computerScore);
}

function updateRoundNumber(round) {
  document.getElementById("roundNumber").textContent = `Round: ${round}`;
}

function updatePlayerChoice(choice) {
  document.getElementById("playerChoice").textContent =
    `Your choice: ${choice}`;
}

function updateComputerChoice(choice) {
  document.getElementById("computerChoice").textContent =
    `Computer's choice: ${choice}`;
}

function updateResult(result) {
  document.getElementById("result").textContent = `Result: ${result}`;
}

function updateScore(playerScore, computerScore) {
  document.getElementById("score").textContent =
    `Score - You: ${playerScore}, Computer: ${computerScore}`;
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
    updateResult(
      `You are the winner! Your final score is: ${playerScore}, and the computer had ${computerScore}.`,
    );
    disableButtons();
    resetScores();
    setTimeout(enableButtons, 1500);
  }
  if (computerScore === 10) {
    updateResult(
      `You lost! Your final score is: ${playerScore}, and the computer had ${computerScore}.`,
    );
    disableButtons();
    resetScores();
    setTimeout(enableButtons, 1500);
  }
}

function disableButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

function enableButtons() {
  document.getElementById("rockBtn").disabled = false;
  document.getElementById("paperBtn").disabled = false;
  document.getElementById("scissorsBtn").disabled = false;
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  gameCount = 1;
}
