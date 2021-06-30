import React from 'react';
import './board.css';
const Board = ({ index, active, onClick, currentBoard, board }) => {
    return (
      <div onClick={() => {onClick(); currentBoard(board)}} className={active ? "active title" : "title"}>
        {index}. {board.title} - {board.owner}
      </div>
    );
  };
export default Board;