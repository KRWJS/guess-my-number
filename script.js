'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMesseage = message => {
  document.querySelector('.message').textContent = message;
};

const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

const displayHighscore = highscore => {
  document.querySelector('.highscore').textContent = highscore;
};

const setBackgroundColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = width => {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMesseage('No number');
  } else if (guess === secretNumber) {
    displayMesseage('Correct!');
    displayNumber(secretNumber);
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      displayHighscore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesseage(
        guess > secretNumber ? 'Number is too high' : 'Number is too low'
      );
      score--;
      displayScore(score);
    } else {
      displayMesseage('Game over');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  Number((document.querySelector('.guess').value = ''));
  displayNumber('?');
  displayScore(score);
  displayMesseage('Start guessing...');
  setBackgroundColor('#222');
  setNumberWidth('15rem');
});
