function generateRandom(number) {
  return Math.floor(Math.random() * number + 1);
}

function computerSelection() {
  let number = generateRandom(3);
  var choice;
  switch (number) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }
  return choice;
}

function playRound(computer, user) {
  let message;
  let result;
  if (computer == user) {
    message = "Draw!";
    result = 0;
  } 
  else if (computer == "rock") {
    if (user == "paper") {
      message = "You Win! Paper beats rock!";
      result = 2;
    } 
    else if (user == "scissors") {
      message = "You lose! Rock beats scissors!";
      result = 1;
    }
  } 
  else if (computer == "paper") {
    if (user == "scissors") {
      message = "You Win! Scissors beats paper!";
      result = 2;
    } 
    else if (user == "rock") {
      message = "You lose! Paper beats rock!";
      result = 1;
    }
  } 
  else if (computer == "scissors") {
    if (user == "rock") {
      message = "You Win! Rock beats scissors!";
      result = 2;
    } 
    else if (user == "paper") {
      message = "You lose! Scissors beats paper!";
      result = 1;
    }
  }
  return [message, result];
}

function gameStartup(){
  let mainBtn = document.getElementById("main-btn");
  mainBtn.classList.add("big-btn-hide");
  userScore = 0;
  computerScore = 0;
  usrScore.innerText = userScore;
  pcScore.innerText = computerScore;
  openPopup(gameCountPopup);
}

var winnerCount;
var gamePopup;
var gamePopup;
var gameCountPopup = document.getElementById("gamecount-popup");
var gameCountInput = document.getElementById("game-count-input");
var gameCountElement = document.getElementById("remaining-games");
var usrScore = document.getElementById("usr-score");
var pcScore = document.getElementById("pc-score");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorsBtn = document.getElementById("scissors");
var gameContainer = document.getElementById("gameContainer");

function closePopup(element){
  element.classList.remove("open-popup");
}

function gameStart(){
  gameCount = gameCountInput.value;
  gameCountElement.innerText = gameCount;
  closePopup(gameCountPopup);
}

function openPopup(element){
  element.classList.add("open-popup");
}

document.addEventListener("DOMContentLoaded", function(){
  createRoundPopup();
  createGamePopup();
});

function openChangePopup(element, message){
  heading = element.querySelector("h3");
  heading.innerText =  message;

  element.classList.add("open-popup");
  setTimeout(function(){
    closePopup(element)
  }, 3000);
}

function createRoundPopup() {
  winnerPopup = document.createElement("div");
  winnerPopup.classList.add("winner-popup");
  let heading = document.createElement("h3");
  heading.innerText = "";
  winnerPopup.appendChild(heading);
  gameContainer.appendChild(winnerPopup);
}

function createGamePopup() {
  gamePopup = document.createElement("div");
  gamePopup.classList.add("game-popup");
  let heading = document.createElement("h3");
  heading.innerText = "";
  gamePopup.appendChild(heading);
  gameContainer.appendChild(gamePopup);
}

var userScore = 0;
var computerScore = 0;

paperBtn.addEventListener("click", function(){
  playGame("paper");
});

rockBtn.addEventListener("click", function(){
  playGame("rock");
});

scissorsBtn.addEventListener("click", function(){
  playGame("scissors");
});

function playGame(usrChoice){
  var div = document.createElement("button");
  var container = document.getElementById("computer-btn-container");
  if (gameCount > 1){
    
    var computerChoice = computerSelection();
    var userChoice = usrChoice;
    let game = playRound(computerChoice, userChoice);
    let gameMessage = game[0];
    let gameResult = game[1];

    
    gameCount = gameCount - 1;
    gameCountElement.innerText = gameCount;
    openChangePopup(winnerPopup, gameMessage)

    div.classList.add("pc-choice-btn");
    div.setAttribute("id", "computer-choice");
    div.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);
    if (!document.getElementById("computer-choice")) {
      container.appendChild(div);
    }
    else {
      var computerChoiceBtn = document.getElementById("computer-choice");
      computerChoiceBtn.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);
    }
    switch (gameResult) {
      case 0:
        computerScore++;
        userScore++;
        break;
      case 1:
        computerScore++;
        break;
      case 2:
        userScore++;
        break;
    }
    pcScore.innerText = computerScore;
    usrScore.innerText = userScore;
  }
  else if (gameCount == 1){
    computerChoice = computerSelection();
    game = playRound(computerChoice, usrChoice);
    gameMessage = game[0];
    gameResult = game[1];

    
    gameCount = gameCount - 1;
    gameCountElement.innerText = gameCount;
    openChangePopup(winnerPopup, gameMessage)

    div.classList.add("pc-choice-btn");
    div.setAttribute("id", "computer-choice");
    div.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);
    if (!document.getElementById("computer-choice")) {
      container.appendChild(div);
    }
    else {
      let computerChoiceBtn2 = document.getElementById("computer-choice");
      computerChoiceBtn2.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.substring(1);
    }
    switch (gameResult) {
      case 0:
        computerScore++;
        userScore++;
        break;
      case 1:
        computerScore++;
        break;
      case 2:
        userScore++;
        break;
    }
    pcScore.innerText = computerScore;
    usrScore.innerText = userScore;

    setTimeout(function(){
      if (computerScore == userScore) {
        openChangePopup(gamePopup, "Total Score: \n Draw!")
      } 
      else if (computerScore > userScore) {
        openChangePopup(gamePopup, "Total Score: \n You have lost the game. \n Better luck next time!");
      } 
      else if (userScore > computerScore) {
        openChangePopup(gamePopup, "Total Score: \n You have won the game. \n Congratulations!");
      }
    }, 2000);
    let mainBtn = document.getElementById("main-btn");
    mainBtn.classList.remove("big-btn-hide");
  }
}