function reset() {
  let playerHand = document.querySelector("#player-hand");
  let computerHand = document.querySelector("#computer-hand");
  let playerScore = document.querySelector("#player-score");
  let computerScore = document.querySelector("#computer-score");
  let modal = document.querySelector(".modal");

  modal.style.display = "none";

  playerScore.textContent = "0";
  computerScore.textContent = "0";

  playerHand.className = "fas fa-hand-rock";
  playerHand.style.transform = "rotate(90deg)";
  computerHand.className = "fas fa-hand-rock";
  computerHand.style.transform = "rotate(-90deg) scaleX(-1)";
}

function checkWinner() {
  let playerHand = document.querySelector("#player-hand");
  let computerHand = document.querySelector("#computer-hand");
  let playerScore = document.querySelector("#player-score");
  let computerScore = document.querySelector("#computer-score");

  if (playerScore.textContent === "5") {
    let modal = document.querySelector(".modal");
    modal.style.display = "flex";
    modal.querySelector(".text").textContent = "You won!";
    modal.querySelector("button").addEventListener("click", function() {
      reset();
    });
    modal.addEventListener("click", function () {
      modal.style.display = "none";
    });
    return true;
  } else if (computerScore.textContent === "5") {
    let modal = document.querySelector(".modal");
    modal.style.display = "flex";
    modal.querySelector(".text").textContent = "You lost!";
    modal.querySelector("button").addEventListener("click", function() {
      reset();
    });
    modal.addEventListener("click", function () {
      modal.style.display = "none";
    });
    return true;
  }
  return false;
}

let buttons = document.querySelectorAll(".choose button");
for (let button of buttons) {
  button.addEventListener("click", function() {

    if (checkWinner() === true) {
      return;
    }

    let playerHand = document.querySelector("#player-hand");
    let computerHand = document.querySelector("#computer-hand");
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");

    //deal with the player hand.
    playerHand.className = "fas fa-hand-" + button.id;
    playerHand.style.transform = "rotate(90deg)";
    if (button.id === "scissors") {
      playerHand.style.transform = "scaleX(-1)";
    }

    //deal with the computer hand.
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    computerHand.className = "fas fa-hand-" + choices[randomIndex];
    computerHand.style.transform = "rotate(-90deg) scaleX(-1)";
    if (choices[randomIndex] === "scissors") {
      computerHand.style.transform = "scaleX(1)";
    }

    //deal with scores.
    playerChoose = button.id;
    computerChoose = choices[randomIndex];
    if (playerChoose === "rock") {
      if (computerChoose === "paper") {
        computerScore.textContent = String(Number(computerScore.textContent) + 1);
      } else if (computerChoose === "scissors") {
        playerScore.textContent = String(Number(playerScore.textContent) + 1);
      }
    } else if (playerChoose === "paper") {
      if (computerChoose === "rock") {
        playerScore.textContent = String(Number(playerScore.textContent) + 1);
      } else if (computerChoose === "scissors") {
        computerScore.textContent = String(Number(computerScore.textContent) + 1);
      }
    } else if (playerChoose === "scissors") {
      if (computerChoose === "paper") {
        playerScore.textContent = String(Number(playerScore.textContent) + 1);
      } else if (computerChoose === "rock") {
        computerScore.textContent = String(Number(computerScore.textContent) + 1);
      }
    }

    checkWinner();

  });
}