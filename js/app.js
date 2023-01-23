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

function userChoice() {
  let userChoice = prompt("Input your move");
  userChoice = userChoice.toLowerCase();
  while (userChoice != "rock" && userChoice != "paper" && userChoice != "scissors"){
    alert("Invalid Input!\n\nPlease choose 'rock' or 'paper' or 'scissors'");
    userChoice = prompt("Input your move");
    userChoice = userChoice.toLowerCase();
  }
  return userChoice;
}

function playRound(computer, user) {
  let message;
  let result;
  if (computer == user) {
    message = "Draw!";
    result = 0;
  } else if (computer == "rock") {
    if (user == "paper") {
      message = "You Win! Paper beats rock!";
      result = 2;
    } else if (user == "scissors") {
      message = "You lose! Rock beats scissors!";
      result = 1;
    }
  } else if (computer == "paper") {
    if (user == "scissors") {
      message = "You Win! Scissors beats paper!";
      result = 2;
    } else if (user == "rock") {
      message = "You lose! Paper beats rock!";
      result = 1;
    }
  } else if (computer == "scissors") {
    if (user == "rock") {
      message = "You Win! Rock beats scissors!";
      result = 2;
    } else if (user == "paper") {
      message = "You lose! Scissors beats paper!";
      result = 1;
    }
  }
  console.log(computer, user);
  return [message, result];
}

function game() {
  let amount = parseInt(prompt("How many games would you like to play?"));
  let user = 0;
  let computer = 0;
  let gameCounter = amount;

  for (var i = 1; i <= amount; i++) {
    gameCounter = gameCounter - 1;
    let game = playRound(computerSelection(), userChoice());
    let gameMessage = game[0];
    let gameResult = game[1];

    switch (gameResult) {
      case 0:
        computer++;
        user++;
        alert(
          "\n" +
            gameMessage +
            "\n\n\nScore:\n\nYou: " +
            user +
            "\nComputer: " +
            computer +
            "\nGames left: " +
            gameCounter
        );

        break;

      case 1:
        computer++;
        alert(
          "\n" +
            gameMessage +
            "\n\n\nScore:\n\nYou: " +
            user +
            "\nComputer: " +
            computer +
            "\nGames left: " +
            gameCounter
        );
        break;
      case 2:
        user++;
        alert(
          "\n" +
            gameMessage +
            "\n\n\nScore:\n\nYou: " +
            user +
            "\nComputer: " +
            computer +
            "\nGames left: " +
            gameCounter
        );
        break;
    }
  }
  if (computer == user) {
    alert(
      "\n" +
        "Draw!" +
        "\n\n\nScore:\n\nYou: " +
        user +
        "\nComputer: " +
        computer +
        "\nGames left: " +
        gameCounter
    );
  } else if (computer > user) {
    alert(
      "\n" +
        "You have lost the game. Better luck next time!" +
        "\n\n\nScore:\n\nYou: " +
        user +
        "\nComputer: " +
        computer +
        "\nGames left: " +
        gameCounter
    );
  } else if (user > computer) {
    alert(
      "\n" +
        "You have won the game. Congratulations!" +
        "\n\n\nScore:\n\nYou: " +
        user +
        "\nComputer: " +
        computer +
        "\nGames left: " +
        gameCounter
    );
  }
  const container = document.querySelector('container');
  
}
