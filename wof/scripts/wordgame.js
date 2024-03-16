let selectedIdiom = '';
let guessedLetters = [];
let remainingGuesses = 6;
const puzzleBoard = document.getElementById('puzzle');
const numChance = document.getElementById('guess');
const chanceLeft = document.getElementById('chance-left');
const alphabets = document.querySelectorAll('.letter-btn');
let prize = document.getElementById('status-prize');
const letterContainer = document.getElementById('letter-wrapper');
const finalBoard = document.getElementById('final-game');


// choosing random idiom for puzzel
function selectRandomIdiom() {
    const randomIndex = Math.floor(Math.random() * idioms.length);
    selectedIdiom = idioms[randomIndex].toUpperCase();
    guessedLetters = Array(selectedIdiom.length).fill('_');
}

// display puzzel
function displayPuzzle() {
    const displayText = selectedIdiom.split('').map((char) => {
        return char === ' ' ? ' ' : (guessedLetters.includes(char) ? char : '_');
    }).join('');
    puzzleBoard.textContent = displayText;
}


function updateGuesses(e) {
    const letter = e.target.textContent;
    e.target.classList.add('letter-used');

    if (!selectedIdiom.includes(letter)) {
        remainingGuesses--;
    } else {
        selectedIdiom.split('').forEach((char, index) => {
            if (char === letter) {
                guessedLetters[index] = letter;
            }
        });
    }
    chanceLeft.textContent = remainingGuesses;
    displayPuzzle();
    checkGameEnd();
}


// count the number of right answers and stack it to prize
function stackPrize() {
    const count = guessedLetters.filter(letter => letter !== '_').length;
    const currentPrize = (count * 100);
    prize.textContent = currentPrize;
}


function checkGameEnd() {
    const targetLetters = selectedIdiom.split('').filter(char => char !== ' ');
    const guessedLettersWithoutSpaces = guessedLetters.filter(char => char !== ' ');
    const isWin = targetLetters.every(letter => guessedLettersWithoutSpaces.includes(letter));

    if (isWin) {
        stackPrize();
        puzzleBoard.innerHTML = `Congratulations! <br> You have earned &#36;${currentPrize}!!`;
        nextBtn.classList.toggle('active');
        letterContainer.classList.toggle('active');
        numChance.classList.toggle('active');
    } else if (remainingGuesses <= 0) {
        stackPrize();
        puzzleBoard.innerHTML = `Game over! The correct answer was: <br> ${selectedIdiom} <br> You have earned &#36;${prize.textContent} so far!`;
        nextBtn.classList.toggle('active');
        letterContainer.classList.toggle('active');
        numChance.classList.toggle('active');
    }
}

function startWarmUp() {
    selectRandomIdiom();
    displayPuzzle();
    chanceLeft.textContent = remainingGuesses;
    alphabets.forEach(button => {
        button.addEventListener('click', updateGuesses);
    });
}

// word game start
form.addEventListener('submit', function (e) {
    e.preventDefault();
    startWarmUp();
})

// spinning wheel
const wheel = document.getElementById('wheel');
let degree = '';
let multiplier = '';
let newDegree = '';

spinBtn.addEventListener('click', () => {

    // spin the wheel for 5seconds and get the random value
    degree = Math.floor(Math.random() * 7200);
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${degree}deg)`;
    newDegree = (degree % 360);
    if (newDegree >= 0 && newDegree < 90) {
        multiplier = 2;
        remainingGuesses = 7;
    } else if (newDegree >= 90 && newDegree < 180) {
        multiplier = 3;
        remainingGuesses = 4;
    } else if (newDegree >= 180 && newDegree < 270) {
        multiplier = 4;
        remainingGuesses = 6;
    } else {
        multiplier = 5;
        remainingGuesses = 5;
    }
    spinBtn.classList.toggle('active');

    wheel.addEventListener('transitionend', function () {
        alert(`You got a chance to multiply your prize ${multiplier} times with ${remainingGuesses} guesses!`);
        wheelBoard.classList.toggle('active');
        finalBoard.classList.toggle('active');
        startFinal();
    });
});



// final game
const finalPuzzle = document.getElementById('final-puzzle');
const newAlphabets = document.querySelectorAll('.final-letter-btn');
const newChanceLeft = document.getElementById('final-chance-left');
const newLetterContainer = document.getElementById('final-letter-wrapper');
const finalGuess = document.getElementById('final-guess');

function selectFinalRandomIdiom() {
    const randomIndex = Math.floor(Math.random() * idioms.length);
    selectedIdiom = idioms[randomIndex].toUpperCase();
    guessedLetters = Array(selectedIdiom.length).fill('_');
}

function displayFinalPuzzle() {
    const displayText = selectedIdiom.split('').map((char) => {
        return char === ' ' ? ' ' : (guessedLetters.includes(char) ? char : '_');
    }).join('');
    finalPuzzle.textContent = displayText;
}

function stackFinalPrize() {
    const finalPrize = (prize.textContent * multiplier);
    prize.textContent = finalPrize;
}

function checkFinalGameEnd() {
    const targetLetters = selectedIdiom.split('').filter(char => char !== ' ');
    const guessedLettersWithoutSpaces = guessedLetters.filter(char => char !== ' ');
    const isWin = targetLetters.every(letter => guessedLettersWithoutSpaces.includes(letter));

    if (isWin) {
        stackFinalPrize();
        finalPuzzle.innerHTML = `Congratulations! <br> Your prize is multiplied ${multiplier} times!!`;
        newLetterContainer.classList.toggle('active');
        finalGuess.classList.toggle('active');
        againBtn.classList.toggle('active');
    } else if (remainingGuesses <= 0) {
        finalPuzzle.innerHTML = `Game over! The correct answer was: <br> ${selectedIdiom} <br> You lost the chance to multiply your prize!`;
        newLetterContainer.classList.toggle('active');
        finalGuess.classList.toggle('active');
        againBtn.classList.toggle('active');
    }
}

function updateFinalGuesses(e) {
    const letter = e.target.textContent;
    e.target.classList.add('letter-used');

    if (!selectedIdiom.includes(letter)) {
        remainingGuesses--;
    } else {
        selectedIdiom.split('').forEach((char, index) => {
            if (char === letter) {
                guessedLetters[index] = letter;
            }
        });
    }
    newChanceLeft.textContent = remainingGuesses;
    displayFinalPuzzle();
    checkFinalGameEnd();
}

function startFinal() {
    selectFinalRandomIdiom();
    displayFinalPuzzle();
    newChanceLeft.textContent = remainingGuesses;
    newAlphabets.forEach(button => {
        button.addEventListener('click', updateFinalGuesses);
    });
}



