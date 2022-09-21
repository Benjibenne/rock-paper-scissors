// choices of buttons
const options = document.querySelectorAll(".image-size");

let pScore = 0;
let cScore = 0;

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    showImages(pInput, cInput);
    compareInputs(pInput, cInput);
    changeScore();
    if (checkWinner()) {
      pScore = cScore = 0;
      changeScore();
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

 //images for playground 
 function showImages(pInput, cInput) {
   document.getElementById("players-choices").src =`assets/images/${pInput}.png`;
   document.getElementById("computers-choices").src =`assets/images/${cInput}.png`;
 }

 // check score counter 
 function changeScore() {
    document.getElementById("player-score").textContent = pScore;
    document.getElementById("computer-score").textContent = cScore;
  }


  // checking winner
  function checkWinner() {
    if (pScore === 6 || cScore === 6) {
      const winner =
        pScore === 6
          ? "You win the game! Congratulations!"
          : "Computer wins the game! Try again next time!";
      alert(winner);
      return true;
    }
    return false;
  }

  