const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

// selects all elements with the class of far
const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected' icons
const resetSelected = () => allGameIcons.forEach(icon => icon.classList.remove('selected'));

// Random computer choice
computerRandomChoice = () => {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) return computerChoice = 'rock';
  if (computerChoiceNumber < 0.4) return computerChoice = 'paper';
  if (computerChoiceNumber < 0.6) return computerChoice = 'scissors';
  if (computerChoiceNumber < 0.8) return computerChoice = 'lizard';
  return computerChoice = 'spock';
}

// Add 'selected' styling and computerChoice
const displayComputerChoice = () => {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
  }
};

// Check result, increase scores, update resultText
const updateScore = playerChoice => {
  if (playerChoice === computerChoice) return resultText.textContent = "It's a Tie!";

  // Checks if the computer's choice was included in the choice's object defeat array
  const playerWinExist = choices[playerChoice].defeats.filter(winsAgainst => winsAgainst === computerChoice);

  if (playerWinExist.length > 0) {
    playerScoreNumber++;
    playerScoreEl.textContent = playerScoreNumber;
    return resultText.textContent = "You Win!";
  };

  computerScoreNumber++;
  computerScoreEl.textContent = computerScoreNumber;
  return resultText.textContent = "You Lose!"
}

// Call functions to process the turn
const checkResult = playerChoice => {
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and styling icons
const select = playerChoice => {
  checkResult(playerChoice);
  // Add 'selected' styling and playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
  }
};

// Resets all elements
const resetAll = () => {
  resetSelected();
  playerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreNumber = 0;
  computerScoreEl.textContent = computerScoreNumber;
  computerChoice = '';
  resultText.textContent = '';
  playerChoiceEl.textContent = ' --- Choice';
  computerChoiceEl.textContent = ' --- Choice';
}