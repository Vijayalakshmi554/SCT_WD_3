let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

function handleClick(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].textContent = currentPlayer;

    if (checkWinner()) {
      document.getElementById("status").textContent = `Player ${currentPlayer} wins!`;
      gameOver = true;
    } else if (board.every(cell => cell !== "")) {
      document.getElementById("status").textContent = "It's a draw!";
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winPatterns.some(pattern => {
    const [a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  currentPlayer = "X";
  document.getElementById("status").textContent = `Player X's turn`;
  Array.from(document.getElementsByClassName("cell")).forEach(cell => {
    cell.textContent = "";
  });
}
