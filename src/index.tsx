import { useState } from "react";
import "./App.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(0)); // 1D array of 9 cells
  const [currentPlayer, setCurrentPlayer] = useState(1); // 1 for Player 1 (X), -1 for Player 2 (O)
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  const handleClick = (index: number) => {
    if (board[index] !== 0 || gameOver) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    checkWin(newBoard);
    setCurrentPlayer(-currentPlayer);
  };

  const checkWin = (board: number[]) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(`Player ${currentPlayer === 1 ? "1 (X)" : "2 (O)"} wins!`);
        setGameOver(true);
        return;
      }
    }

    if (!board.includes(0)) {
      alert("It's a draw!");
      setGameOver(true);
    }
  };

  return (
    <div className="">
      <div className="topbar">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="board">
        {board.map((element, index) => {
          return (
            <button className="button" onClick={() => handleClick(index)}>
              {element === 1 ? "X" : element === -1 ? "O" : ""}
            </button>
          );
        })}
      </div>
      <div className="bottomText">{winner}</div>
    </div>
  );
}

export default TicTacToe;
