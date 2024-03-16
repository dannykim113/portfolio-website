// evaluate user width of window to play in appropriate environment
const userWidth = window.innerWidth;
const allStop = document.getElementById('all-stop');
const warningMsg = document.getElementById('warning');

function evaluateWidth(value) {
    if (value < 768 || value > 1920) {
        allStop.style.display = 'none';
        warningMsg.style.display = 'block';
    } else {
        allStop.style.display = 'block';
        warningMsg.style.display = 'none';
    }
}

evaluateWidth(userWidth);

window.addEventListener('resize', () => {
    const userWidth = window.innerWidth;
    console.log(userWidth);
    evaluateWidth(userWidth);
});




// instruction button
const instBtn = document.getElementById('inst-btn');
const instBox = document.getElementById('inst-box');

instBtn.addEventListener('click', () => {
    instBox.classList.toggle('active');
});

// start button
const startBtn = document.getElementById('start-btn');
const introPhase = document.getElementById('intro-phase');
const gameOn = document.getElementById('game-on')

startBtn.addEventListener('click', () => {
    introPhase.classList.toggle('active');
    gameOn.classList.toggle('active');
});


// submitting username
const userInput = document.getElementById('username');
const form = document.getElementById('name-form');
const nameBox = document.getElementById('name-container');
const warmUpBoard = document.getElementById('warmup');
const statName = document.getElementById('status-username');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    userName = userInput.value;
    nameBox.classList.toggle('active');
    warmUpBoard.classList.toggle('active');
    statName.textContent = userName;
})

// quit button
const quitBtn = document.getElementById('quit-btn');

quitBtn.addEventListener('click', () => {
    location.reload();
})

// next button
const nextBtn = document.getElementById('next-btn');
const wheelBoard = document.getElementById('wheel-display');
const spinBtn = document.getElementById('spin-btn');

nextBtn.addEventListener('click', () => {
    warmUpBoard.classList.toggle('active');
    nextBtn.classList.toggle('active');
    wheelBoard.classList.toggle('active');
    spinBtn.classList.toggle('active');
})

// again button
const againBtn = document.getElementById('again-btn');

againBtn.addEventListener('click', () => {
    location.reload();
})

// audio controls
const muteBtn = document.getElementById('music-on');
const muteOffBtn = document.getElementById('music-off');
const music = document.getElementById('music');

muteBtn.addEventListener('click', () => {
    muteBtn.classList.toggle('active');
    muteOffBtn.classList.toggle('active');
    music.pause();
})

muteOffBtn.addEventListener('click', () => {
    muteBtn.classList.toggle('active');
    muteOffBtn.classList.toggle('active');
    music.play();
})