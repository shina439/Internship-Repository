const guessInput = document.getElementById("guessinput");
const submitBtn = document.getElementById("submitguess");
const message = document.getElementById("massage");
const attemptDisplay = document.getElementById("attempt");
const restartBtn = document.getElementById("restartBtn");

let secretNumber;
let attempt;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempt = 0;
  message.textContent = "";
  attemptDisplay.textContent = "Attempt: 0";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  restartBtn.classList.add("hidden");
}

function checkGuess() {
  const userGuess = Number(guessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "❌ Please enter a number between 1 and 100.";
    return;
  }

  attempt++;
  attemptDisplay.textContent = `Attempt: ${attempt}`;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 Congratulations! You guessed the number ${secretNumber} in ${attempt} tries.`;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.classList.remove("hidden");
  } else if (userGuess < secretNumber) {
    message.textContent = "🔼 Too low! Try a higher number.";
  } else {
    message.textContent = "🔽 Too high! Try a lower number.";
  }

  guessInput.value = "";
}

function restartGame() {
  startGame();
}

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

// Initialize game on page load
startGame();
