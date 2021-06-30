import React, { useState } from 'react';
import './boardForm.css';

const cardForm = () => {
    // const [title, setTitle]=useState('');
    // const [owner, setOwner]=useState('');
    // const handleTitleChange = (e) => {
    //     console.log(e.target.value); 
    //     setTitle(e.target.value); };
    // const handleOwnerChange = (e) => { 
    //     console.log(e.target.value); 
    //     setOwner(e.target.value); };
    // const submitNewBoard = (e) => {
    //     e.preventDefault();
    //     console.log(title);
    //     console.log(owner);
    //     createNewCard({ title, owner });
    //     setTitle('');
    //     setOwner('');
    // };
    return (
        <div>
            <form>
                <label>Title</label>
                <input 
                    type='text'
                    // value={title}
                    // onChange={handleTitleChange}
                    placeholder='Add a title'
                />
                <label>Owner</label>
                <input 
                    type='text' 
                    // value={owner}
                    // onChange={handleOwnerChange}
                    placeholder='Add a owner name'
                />
                {/* <p>Preview: {title} - {owner}</p> */}
                <input type="Submit"
                // disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}
                />
            </form>
        </div>
    )
}

export default cardForm;