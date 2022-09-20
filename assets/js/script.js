// choices of buttons
const options = document.querySelectorAll(".image-size");

options.forEach((option) => {
  option.addEventListener("click", function () {
    const pInput = this.textContent;

    const cOptions = ["Rock", "Paper", "Scissors"];
    const cInput = cOptions[Math.floor(Math.random() * 3)];

    compareInputs(pInput, cInput);
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
    } else {
        alert(`${currentMatch} = Computer Wins`);
      }
    }
    // Paper
  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
    } else {
      alert(`${currentMatch} = Computer Wins`);
    }
  }
  // Scissors
  else {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
    } else {
      alert(`${currentMatch} = Computer Wins`);
    }
  }
 }
 