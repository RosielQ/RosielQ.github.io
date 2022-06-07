'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
// document.querySelector('.number').textContent = secreteNumber;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess);

	//no input makes boolean = 0
	if (!guess) {
		document.querySelector('.message').textContent = '⛔️ No number!';
		//correct guess
	} else if (guess === secreteNumber) {
		document.querySelector('.number').textContent = secreteNumber;
		document.querySelector('.message').textContent = '🎉 Correct Number!';
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		//check highest score
		if (score > highestScore) highestScore = score;
		document.querySelector('.highscore').textContent = highestScore;

		//guess too high
	} else if (guess > secreteNumber) {
		if (score > 0) {
			document.querySelector('.message').textContent = '📈 Too high!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
		}
		//guess too low
	} else {
		if (score > 0) {
			document.querySelector('.message').textContent = '📉 Too low!';
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			document.querySelector('.message').textContent = '💥 You lost the game!';
		}
	}
});
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secreteNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').textContent = '';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
