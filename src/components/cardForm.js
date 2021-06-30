import React, { useState } from 'react';
// import './boardForm.css';

const CardForm = ({ createNewCard }) => {
    // const [message, setMessage]=useState('');
    // // const [owner, setOwner]=useState('');
    // const handleMessageChange = (e) => { setMessage(e.target.value) };
    // // const handleOwnerChange = (e) => { setOwner(e.target.value) };

    // const submitNewCard = (e) => {
    //     e.preventDefault();
    //     createNewCard({ message });
    //     setMessage('');
        
    // };

    return (
        <div>
            <form  className='new-card-form'>
                <label>Message</label>
                <input 
                    type='text' 
                    // value={message}
                    // onChange={handleMessageChange}
                    placeholder='Add a message'
                />
                {/* <label>Owner</label>
                <input 
                    type='text' 
                    value={owner}
                    onChange={handleOwnerChange}
                    placeholder='Add a owner name'
                /> */}
                {/* <p>Preview: {message}</p> */}
                <input type="Submit"/>
            </form>
        </div>
    )
}
export default CardForm