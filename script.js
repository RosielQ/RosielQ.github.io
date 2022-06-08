'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

function displayMessage(message) {
	document.querySelector('.message').textContent = message;
}

// document.querySelector('.number').textContent = secreteNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	//no input (makes boolean = 0)
	if (!guess) {
		displayMessage('⛔️ No number!');
		//correct guess
	} else if (guess === secreteNumber) {
		document.querySelector('.number').textContent = secreteNumber;
		displayMessage('🎉 Correct Number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highestScore) {
			highestScore = score;
		}
		document.querySelector('.highscore').textContent = highestScore;
		//wrong guess
	} else if (guess !== secreteNumber) {
		if (score > 1) {
			displayMessage(guess > secreteNumber ? '📈 Too high!' : '📉 Too low!');

			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMessage('💥 You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secreteNumber = Math.trunc(Math.random() * 20) + 1;
	displayMessage('Start guessing...');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').textContent = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
