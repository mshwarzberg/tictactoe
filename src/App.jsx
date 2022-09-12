import { useEffect, useState } from "react";
import Box from "./Box";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState();

  useEffect(() => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (const positions of winningPositions) {
      const [a, b, c] = positions;
      if (!board[a] || !board[b] || !board[c]) {
        continue;
      }
      if (board[a] === board[b] && board[b] === board[c]) {
        setWinner(board[a]);
        break;
      }
    }
  }, [player, board]);

  const renderBoard = board.map((item, index) => {
    return (
      <Box
        value={item}
        key={index}
        setBoard={setBoard}
        index={index}
        player={player}
        setPlayer={setPlayer}
        winner={winner}
      />
    );
  });

  return (
    <>
      <h1>Tic Tac Toe</h1>
      {winner ? (
        <h1 id="winner">{winner} has won!</h1>
      ) : (
        <h1>{player}'s turn</h1>
      )}
      <div id="grid-container">{renderBoard}</div>
    </>
  );
}

export default App;
