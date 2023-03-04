'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
    document.querySelector('.guess-message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    if (!guessingNumber) {
        displayGuessMessage('Введите значение');
        document.querySelector('.guess-message').style.color = "red";
    } else if (guessingNumber === randomNumber) {
        document.querySelector('.guess-message').textContent = 'Вы угадали число!'
        document.querySelector('.question').textContent = randomNumber;
        document.body.style.backgroundColor = "green";
        document.querySelector('.score').textContent = score;
        document.querySelector('.highscore').textContent = highscore;

        if (score > highscore) {
            highscore++;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guessingNumber !== randomNumber) {
        if (score > 1) {
            document.querySelector('.guess-message').textContent = guessingNumber > randomNumber ? 'Слишком большое число' : 'Слишком мальнькое число'
            document.querySelector('.guess-message').style.color = "yellow";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayGuessMessage('You lose game');
            document.body.style.backgroundColor = "red";
            document.querySelector('.score').textContent = 0;
            highscore = 0;
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20

    document.querySelector('.question').textContent = '???';
    displayGuessMessage('Начни угадывать');

    document.querySelector('.guess-message').style.color = "white";
    document.body.style.backgroundColor = "black";

    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';
})