import React from 'react';
import './board.css';

const Board = ({ active, title, owner, onClick }) => {
    return (
      <div onClick={onClick} className={active ? "active title" : "title"}>
        {title} - {owner}
      </div>
    );
  };
// const Board = (props) => {
//     const isBackgroundWhite = true;
//     const isBackground=(isBackgroundWhite)=>{
//             if (isBackgroundWhite){
//                 return !isBackgroundWhite
//             }
//     }
    
//   return (
//     <div className={isBackground ? 'background-red' : 'background-blue'} />
//   );
//     return (<div onClick={changeColor()}>{props.board.title}</div>);
// };

export default Board;