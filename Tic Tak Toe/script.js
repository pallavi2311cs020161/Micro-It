let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

function makeMove(cell, index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.style.color = currentPlayer === "X" ? "#ff4081" : "#00e5ff";

  if (checkWinner()) {
    document.getElementById("status").textContent = `🎉 Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (!board.includes("")) {
    document.getElementById("status").textContent = "🤝 It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.getElementById("status").textContent = `Player ${currentPlayer}'s Turn`;
  document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}
