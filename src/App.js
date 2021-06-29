import './App.css';
// import BoardForm from './components/boardForm';
import Board from './components/board';
import React, { useState } from 'react'

// axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`, {
//     // ...
const App = () => {
    const boardsData=[
        {'id': 44, 'owner': 'Melissa', 'title': 'Scissors'},
        {'id': 45, 'owner': 'Halisa', 'title': 'Papers'},
        {'id': 46, 'owner': 'Katrina', 'title': 'Rocks'}]

    const [chosen, setChosen] = useState();

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
        });
     
    return (
        <div>
            <h1>Inspiration Board</h1>
            <section>
                <h2>Boards</h2>
                <ol className="boards__list">
                    {boardsElements}
                </ol>
            </section> 
            <section>
                <h2>Create a New Board</h2>
                {/* <BoardForm></BoardForm> */}
                {/* {isBoardFormVisible ? <NewBoardForm createNewBoard={createNewBoard}></NewBoardForm> : ''} */}
                {/* <span onClick={toggleNewBoardForm} className='new-board-form__toggle-btn'>{isBoardFormVisible ? 'Hide New Board Form' : 'Show New Board Form'}</span> */}
            </section>
        </div>
    );
}

export default App;
