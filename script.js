const playBtn = document.querySelector(".intro button");
const introScreen = document.querySelector(".intro");
const match = document.querySelector(".match");
let pScore = 0;
let cScore = 0;

//Add event listener to the play btn
playBtn.addEventListener("click", () => {
  introScreen.classList.add("unactive");
  match.classList.add("active");
});

//play Match Function
function playMatch() {
  const options = document.querySelectorAll(".options button");
  const computerOptions = ["rock", "paper", "scissors"];
  const playerHand = document.querySelector(".player-hand");
  const computerHand = document.querySelector(".computer-hand");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[computerNumber];

      //Call compare hands function
      compareHands(this.textContent, computerChoice);

      playerHand.src = ` ./images/${this.textContent}.png`;
      computerHand.src = ` ./images/${computerChoice}.png`;
    });
  });
}

playMatch();

//Compare Hands Function
function compareHands(playerChoice, computerChoice) {
  const winner = document.querySelector(".winner");
  playerChoice = playerChoice.trim().toLowerCase();
  if (playerChoice === computerChoice) {
    winner.textContent = "It is a Tie";
    return;
  }
  if (playerChoice === "rock") {
    // checking for rock
    if (computerChoice === "scissors") {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    }
  }

  if (playerChoice === "paper") {
    // checking for paper
    if (computerChoice === "scissors") {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    }
  }

  if (playerChoice === "scissors") {
    // checking for scissors
    if (computerChoice === "rock") {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    } else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    }
  }
}

//Score function
function updateScore() {
  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;
}
