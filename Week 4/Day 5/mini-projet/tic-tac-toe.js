// Game variables
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X"; // User starts with "X"
let gameActive = true;
let difficulty = "easy"; // Default difficulty is easy
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// DOM Elements
const boxes = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset-button");
const easyButton = document.getElementById("easy-button");
const hardButton = document.getElementById("hard-button");

// Function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  boxes.forEach(box => box.textContent = "");
  resetButton.style.display = "none";
}

// Check for winner or tie
function checkGameState() {
  let winner = null;
  // Check for winner
  winningCombinations.forEach(combination => {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      winner = board[a];
    }
  });

  if (winner) {
    alert(`${winner} wins!`);
    gameActive = false;
    resetButton.style.display = "block";
    return;
  }

  // Check for tie
  if (!board.includes("") && gameActive) {
    alert("It's a tie!");
    gameActive = false;
    resetButton.style.display = "block";
  }
}

function computerMove() {
  if (difficulty === "easy") {
    let availableMoves = board.map((cell, index) => cell === "" ? index : null).filter(val => val !== null);
    let randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    board[randomMove] = "O";
    boxes[randomMove].textContent = "O";
  } else if (difficulty === "hard") {

    let availableMoves = board.map((cell, index) => cell === "" ? index : null).filter(val => val !== null);
    let move = blockPlayer() || availableMoves[Math.floor(Math.random() * availableMoves.length)];
    board[move] = "O";
    boxes[move].textContent = "O";
  }
  checkGameState();
  currentPlayer = "X"; 
}

function blockPlayer() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const combo = [board[a], board[b], board[c]];
    const emptyIndex = combo.indexOf("") !== -1 ? [a, b, c].find(index => combo[index] === "") : -1;
    if (emptyIndex !== -1 && combo.filter(val => val === "X").length === 2) {
      return [a, b, c][emptyIndex];
    }
  }
  return null;
}


function handleBoxClick(event) {
  if (!gameActive) return;

  const boxIndex = event.target.id.replace("box", "");
  if (board[boxIndex] === "") {
    board[boxIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkGameState();
    currentPlayer = "O"; 

    if (gameActive) {
      setTimeout(computerMove, 500); 
    }
  }
}

boxes.forEach(box => box.addEventListener("click", handleBoxClick));

easyButton.addEventListener("click", () => {
  difficulty = "easy";
  resetGame();
});
hardButton.addEventListener("click", () => {
  difficulty = "hard";
  resetGame();
});


resetButton.addEventListener("click", resetGame);
