import React, { useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill());
  const [xIsNext, setXIsNext] = useState(true);
  const handleResetBoard = () => {
    setBoard(Array(9).fill());
    setXIsNext(true);
  };
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (boardCopy[index]) return;
    boardCopy[index] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    const winner = calculateWinner(boardCopy);
    if (winner) {
      setTimeout(function () {
        alert(`Winner is ${boardCopy[index]}`);
        handleResetBoard();
      }, 100);
    }
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <button className="btn-reset" onClick={handleResetBoard}>
        Reset board
      </button>
    </div>
  );
};

export default Game;
