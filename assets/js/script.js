const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const gameButtons = document.querySelectorAll('[data-selection]');
let computerChoiceOptions = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let userChoice;
let computerChoice;
let result;




function openGame() {
    window.location.href = "game.html"
}

function openRules() {
    window.location.href = "rules.html"
}

function openMenu() {
    window.location.href = "index.html"
}

function endGame() {
    window.location.href = "gameover.html"
}

gameButtons.forEach(gameButton => gameButton.addEventListener('click', (e) => {
    userChoice = e.target.dataset;
    playerChoiceDisplay.setAttribute("src", `assets/images/${e.target.id}-image.png`); // sets the images for players choice
    getResult();
}));

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 5);
    computerChoiceDisplay.innerHTML = computerChoiceOptions[randomNumber];
    computerChoiceDisplay.setAttribute("src", `assets/images/${computerChoiceOptions[randomNumber]}-image.png`); // sets the image for computer choice
    computerChoiceDisplay.setAttribute("alt", `${computerChoiceOptions[randomNumber]}`); //sets alt text for image for computer choice
    computerChoice = computerChoiceOptions[randomNumber];


}

const options = {
    'rock': ['scissors', 'lizard'],
    'paper': ['rock', 'spock'],
    'scissors': ['paper', 'lizard'],
    'lizard': ['paper', 'spock'],
    'spock': ['scissors', 'rock'],
};

function getResult() {
    generateComputerChoice();
    beatenArray = options[userChoice.selection];
    let answer = beatenArray.includes(computerChoice);
    if (answer == true) {
        result = 'You Win!';
        incrementPlayerScore();
    } else if (answer == false) {
        result = 'You Lose!';
        incrementComputerScore();
    }
    if (computerChoice === userChoice.selection) {
        result = "It's A Draw!";
    }
    resultDisplay.innerHTML = result;
}

//increment score for computer and player

function incrementPlayerScore() {
    let playerScore = parseInt(document.getElementById('player-score').innerText);
    document.getElementById('player-score').innerText = ++playerScore;
}

function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById('computer-score').innerText);
    document.getElementById('computer-score').innerText = ++computerScore;
}

// best of three game



function bestOfThree () {
    if (document.getElementById('computer-score').innerText == 2 || document.getElementById('player-score').innerText == 2) {
        endGame();
    }
    
}