let buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function() {

    //deal with the player hand.
    let playerHand = document.querySelector("#player-hand");
    playerHand.className = "fas fa-hand-" + button.id;
    playerHand.style.transform = "rotate(90deg)";
    if (button.id === "scissors") {
      playerHand.style.transform = "scaleX(-1)";
    }

    //deal with the computer hand.
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let computerHand = document.querySelector("#computer-hand");
    computerHand.className = "fas fa-hand-" + choices[randomIndex];
    computerHand.style.transform = "rotate(-90deg) scaleX(-1)";
    if (choices[randomIndex] === "scissors") {
      computerHand.style.transform = "scaleX(1)";
    }

    //deal with scores.
    playerChoose = button.id;
    computerChoose = choices[randomIndex];
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score");
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

    if (playerScore.textContent === "5") {

    } else if (computerScore.textcontent === "5") {

    }
  });
}