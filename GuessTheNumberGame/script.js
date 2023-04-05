'use strict';

// console.log(document.querySelector('.message').textContent);

// DOM - Document Object Model

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.highscore').textContent);
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20);

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too High!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
  }
});
