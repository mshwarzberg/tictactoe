import React from "react";

export default function Box({
  value,
  setBoard,
  index,
  player,
  setPlayer,
  winner,
}) {
  return (
    <div
      className={`box ${value || winner ? "disabled" : ""}`}
      onClick={() => {
        if (value || winner) {
          return;
        }
        setBoard((prevBoard) =>
          prevBoard.map((prevItem, prevIndex) => {
            if (prevIndex === index) {
              return player;
            }
            return prevItem;
          })
        );
        if (player === "X") {
          setPlayer("O");
        } else {
          setPlayer("X");
        }
      }}
    >
      {value}
    </div>
  );
}
