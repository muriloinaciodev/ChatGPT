let currentPlayer = "X";
let gameOver = false;

const cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", function() {
		if (!gameOver) {
			if (this.textContent === "") {
				this.textContent = currentPlayer;

				if (checkForWin()) {
					gameOver = true;
					alert("Player " + currentPlayer + " wins!");
				} else if (checkForTie()) {
					gameOver = true;
					alert("Tie game!");
				} else {
					switchPlayer();
				}
			}
		}
	});
}

function checkForWin() {
	// check rows
	for (let i = 1; i <= 7; i += 3) {
		if (document.getElementById(i).textContent === currentPlayer &&
			document.getElementById(i + 1).textContent === currentPlayer &&
			document.getElementById(i + 2).textContent === currentPlayer) {
			return true;
		}
	}

	// check columns
	for (let i = 1; i <= 3; i++) {
		if (document.getElementById(i).textContent === currentPlayer &&
			document.getElementById(i + 3).textContent === currentPlayer &&
			document.getElementById(i + 6).textContent === currentPlayer) {
			return true;
		}
	}

	// check diagonals
	if (document.getElementById(1).textContent === currentPlayer &&
		document.getElementById(5).textContent === currentPlayer &&
		document.getElementById(9).textContent === currentPlayer) {
		return true;
	}

	if (document.getElementById(3).textContent === currentPlayer &&
		document.getElementById(5).textContent === currentPlayer &&
		document.getElementById(7).textContent === currentPlayer) {
		return true;
	}
	return false;
}

function checkForTie() {
	for (let i = 0; i < cells.length; i++) {
		if (cells[i].textContent === "") {
			return false;
		}
	}
	return true;
}

function switchPlayer() {
	if (currentPlayer === "X") {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}
}
