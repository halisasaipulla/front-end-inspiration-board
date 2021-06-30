import './App.css';
import BoardForm from './components/boardForm';
import Board from './components/board';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [boardsData, setBoardsData] = useState([]);
    const [chosen, setChosen] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
        }).then((response) => {
          setBoardsData(response.data);
        })
      }, []);
    
    const boardsElements = boardsData.map((board) => {
        return (
            <li>              
                <Board
                    key={board.id}
                    title={board.title}
                    owner={board.owner}
                    active={board.title === chosen}
                    onClick={() => setChosen(board.title)}
                />
            </li>);
        }
    );
    
    const createNewBoard = (newBoard) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards`, newBoard).then((response) => {
            console.log("Response:", response.data.board);
            const boards = [...boardsData];
            boards.push(response.data.board);
            setBoardsData(boards);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t create a new board.');
        });
    }
     
    return (
        <div className='board-header'>
            <h1>Inspiration Board</h1>
            <section className='board-sec'>
                <div>
                    <h2>Boards</h2>
                    <ol className="board-list">
                        {boardsElements}
                    </ol>
                </div>
                <div>
                    <h2>Create a New Board</h2>
                    <BoardForm createNewBoard={createNewBoard}></BoardForm>
                </div>
            </section>
        </div>
    );
}

export default App;
