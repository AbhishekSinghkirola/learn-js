'use strict';

// console.log(document.querySelector('.message').textContent);

// DOM - Document Object Model

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.highscore').textContent);
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20);
let score = 20; //state variables
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // guess is correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You Lost the game!';
      displayMessage('💥 You Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // too high
  //  else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too Low!';
  //     score -= 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You Lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// Again Button Functanility
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start Guessing....';
  displayMessage('Start Guessing....');
  document.querySelector('.score').textContent = score;
});
