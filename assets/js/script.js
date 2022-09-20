// choices of buttons
const options = document.querySelectorAll(".image-size");

let pScore = 0;
let cScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
    updateScore();
    if (checkWinner()) {
      pScore = cScore = 0;
      updateScore();
    }
  });
});

// compare inputs of buttons
function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
  
    // Tie check
    if (pInput === cInput) {
      alert(`${currentMatch} is a Tie`);
      return;
    }
      // Rock
  if (pInput === "Rock") {
    if (cInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
        pScore++;
    } else {
        alert(`${currentMatch} = Computer Wins`);
        cScore++;
      }
    }
    // Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  // Scissors
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
 }
 // check score counter 
 function updateScore() {
    document.getElementById("player-score").textContent = pScore;
    document.getElementById("computer-score").textContent = cScore;
  }

function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}