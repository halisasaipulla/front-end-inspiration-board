import React from 'react';
import './board.css';

const Board = ({ active, title, owner, onClick }) => {
    return (
      <div onClick={onClick} className={active ? "active title" : "title"}>
        {title} - {owner}
      </div>
    );
  };

export default Board;