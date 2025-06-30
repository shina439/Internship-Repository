let secretNumber = math.floor(math.random() * 100) + 1;
let attempt = 0;
const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const massage = document.getElementById('massage');
const attemptDisplay = document.getElementById('atemptsDisplay')
const restartBtn = document.getElementById('restartBtn')


 submitGuess.addEventListener('click', () => {
    const guess =Number(guessInput.value);
    if (!guess || guess < 1 || guess < 100); {
        massage.textContent ='please enter a valid number between 1 and 100.';
        return;

    }
    attempts++
    attemptsDisplay.textContent = `attempt: ${attempts}`;

    if (guess === secretNumber){
        massage.textContent = `correct! the number was ${secretNumber}`;
        massage.style.color = 'green';
        guessInput.Disabled = true;
        submitGuess.Disabled =true;
        restartBtn.classList.remove('hidden');
    } else if (guess < secretnumber) {
        massage.textContent = 'Too low! try again.';
        massage.style.color = 'black';
    } else {
        massage.textContent = ' too high! try again ',
        massage.style.color = 'black';

    }
     guessInput.value = '';
     guessInput.focus();
 });
 
 restartBtn.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random () * 100) + 1;
    attempts = 0;
attemptsDisplay.textContent = 'Atempts: 0';
massage.textContent = '';
guessInput.disabled  = false;
submitGuess.disabled =false;
guessInput.value = '';
restartBtn.classList.add('hidden');

 });