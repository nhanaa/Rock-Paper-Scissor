const compChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

let userChoice;
let computerChoice;
let result;

const possibleChoices = document.querySelectorAll("button");

possibleChoices.forEach((possibleChoices) => possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    getUserChoice(userChoice);
    generateComputerChoice();
    getResult();
}));

function getUserChoice(userChoice) {
    if (userChoice === "rock") {
        userChoiceDisplay.innerHTML = '✊';
    }
    if (userChoice === "scissors") {
        userChoiceDisplay.innerHTML = '✌️';
    }
    if (userChoice === "paper") {
        userChoiceDisplay.innerHTML = '✋';
    }
}
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    if (randomNumber === 1) {
        computerChoice = "rock";
        compChoiceDisplay.innerHTML = '✊';
    }
    if (randomNumber === 2) {
        computerChoice = "scissors";
        compChoiceDisplay.innerHTML = '✌️';
    }
    if (randomNumber === 3) {
        computerChoice = "paper";
        compChoiceDisplay.innerHTML = '✋';
    }
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "Draw!";
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "Computer wins!";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "You win!";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "Computer wins!";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You win!";
    }  
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "Computer wins!";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You win!";
    }
    resultDisplay.innerHTML = result;
}