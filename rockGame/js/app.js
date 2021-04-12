/*
Go back to your “Rock Paper Scissors” game from a previous lesson and give it a simple UI so that the player can play the game by clicking on buttons rather than typing their answer in a prompt.
Copy your original code into a new file so you don’t lose it.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of the programmer’s life.
Don’t forget to go back and add your new version to the original Rock Paper Scissors Project!

When user choose
    show user choice and computer choice ( random)
    compare choices
    show result
    add score to board



*/
const user = document.querySelector('.user');
const computer = document.querySelector('.computer');
const scissors = document.querySelector('.scissors');
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const choices = document.querySelectorAll('.choice');

function Select(e) {
    new_choice = document.createElement("div");
    new_choice = e.target
    console.log(new_choice)
    user.appendChild(new_choice)

};
choices.forEach(choice => choice.addEventListener('click', Select));


// function userInput() {
//     const div = document.createElement('div');
//     div.innerHTML = `<img src='../images/${choice}.png'>`;
//     this.appendChild(div);

// }
// user.addEventListener('onclick', userInput);

// const getUserChoice = (userInput) => {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
//         return userInput;
//     } else {
//         console.log('Your choice is not incorrect, please try again!')
//     }
// };
// const computerChoice = () => {
//     const r = Math.floor(Math.random() * 3);
//     if (r === 0) {
//         return 'rock'
//     } else if (r === 1) {
//         return 'paper'
//     } else {
//         return 'scissors'
//     }
// }
// let scoreUser, scoreComputer;
// scoreUser = scoreComputer = 0;
// let count = 0;
// const determineWinner = (userChoice, computerChoice) => {

//     if (count === 5) {
//         if (scoreUser > scoreComputer) {
//             return `User won ${scoreUser} Vs ${scoreComputer}`;
//         } else if (scoreUser === scoreComputer) {
//             return `It is a tie  ${scoreUser} Vs ${scoreComputer}`;
//         } else {
//             return `Computer won ${scoreComputer} Vs ${scoreUser}`;
//         }
//     }

//     while (scoreUser + scoreComputer < 6) {
//         if (userChoice === computerChoice) {
//             count++;
//             return "The game was a tie!";
//         } else if (userChoice === 'bomb') {
//             count++;
//             scoreUser++;
//             console.log(scoreUser, scoreComputer);
//             return "You win!";
//         } else if (userChoice === 'rock') {
//             if (computerChoice === "paper") {
//                 count++;
//                 scoreComputer++;
//                 console.log(scoreUser, scoreComputer);
//                 return "Computer Won!";
//             } else {
//                 count++;
//                 scoreUser++;
//                 console.log(scoreUser, scoreComputer);
//                 return "You won!";
//             }
//         } else if (userChoice === 'paper') {
//             if (computerChoice === "scissors") {
//                 count++;
//                 scoreComputer++;
//                 console.log(scoreUser, scoreComputer);
//                 return "Computer Won!";
//             } else {
//                 count++;
//                 scoreUser++;
//                 console.log(scoreUser, scoreComputer);
//                 return "You won!";
//             }
//         } else if (userChoice === 'scissors') {
//             if (computerChoice === "rock") {
//                 count++;
//                 scoreComputer++;
//                 console.log(scoreUser, scoreComputer);
//                 return "Computer Won!";
//             } else {
//                 count++;
//                 scoreUser++;
//                 console.log(scoreUser, scoreComputer);
//                 return "You won!";
//             }
//         }

//     }


// }

// function playGame() {
//     for (let i = 0; i < 6; i++) {
//         let userInput = prompt('Enter your choice');
//         const userChoice = getUserChoice(userInput);
//         const getComputerChoice = computerChoice();
//         console.log('You threw: ' + userChoice);
//         console.log('The computer threw:' + getComputerChoice);
//         console.log(determineWinner(userChoice, getComputerChoice));
//         // if (determineWinner(userChoice, getComputerChoice) === "You won!") {
//         //     scoreUser += 1;
//         // } else if (determineWinner(userChoice, getComputerChoice) === "Computer Won!") {
//         //     scoreComputer += 1;
//         // }
//     }

// }
// playGame();