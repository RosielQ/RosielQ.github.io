"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;
let continueGame = true;

document.querySelector(".check").addEventListener("click", function () {
	//game continues
	if (score > 1) {
		score--;
		document.querySelector(".score").textContent = score;

		const inputNumber = Number(document.querySelector(".guess").value);

		//invalid number
		if (inputNumber < 1 || inputNumber > 20) {
			document.querySelector(".message").textContent = "⛔️ Invalid number";

			//correct guess
		} else if (inputNumber === secretNumber) {
			continueGame = false;
			highestScore = score > highestScore ? score : highestScore;
			document.querySelector(".highscore").textContent = highestScore;
			document.querySelector(".number").textContent = secretNumber;
			document.querySelector(".message").textContent = "🎉 Correct number!";
			document.querySelector("body").style.backgroundColor = "#60b347";

			//incorrect but reasonable guess
		} else {
			document.querySelector(".message").textContent =
				inputNumber > secretNumber ? "📈 Too high!" : "📉 Too low!";
			document.querySelector("body").style.backgroundColor = "#222";
		}
		//game ends
	} else if (score === 1) {
		score--;
		document.querySelector(".score").textContent = score;
		document.querySelector(".message").textContent = "💥 You lost the game!";
		document.querySelector("body").style.backgroundColor = "darkred";
	}
});

document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	//document.querySelector(".number").textContent = secretNumber;
	score = 20;
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").textContent = "";
	document.querySelector(".message").textContent = "Start guessing...";
	document.querySelector("body").style.backgroundColor = "#222";
});
