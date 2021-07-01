import './App.css';
import BoardForm from './components/boardForm';
import Board from './components/board';
import CardList from './components/cardList'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [boardsData, setBoardsData] = useState([
        {'board_id': 59, 
        'owner': 'Ada L.', 
        'title': 'Hello world'},
    ]);

    const [selectedBoard, setSelectedBoard] = useState({
        title: '',
        owner: '',
        id: null
      });
    console.log(selectedBoard)

    const [chosen, setChosen] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
        }).then((response) => {
            setBoardsData(response.data);
        })
    }, []);

    const currentBoard = (board) => { setSelectedBoard(board) };
    
    const boardsElements = boardsData.map((board, index) => {
        return (
                <Board
                        key={index}
                        index={index + 1}
                        board={board}
                        currentBoard={currentBoard}
                        active={board.title === chosen}
                        onClick={() => setChosen(board.title)}        
                />);          
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
        <div>
            <h1 className='board-header'>Inspiration Board</h1>
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
            <section>
                {selectedBoard.id ? <CardList selectedBoard={selectedBoard}></CardList> : ''}
            </section>
        </div>
    );
}
export default App;