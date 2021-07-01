import { useState } from 'react';
import './cardForm.css';

const CardForm = ({ createNewCard }) => {
    const [message, setMessage] = useState('');

    const handleMessageChange = (e) => { setMessage(e.target.value) };

    const submitNewCard = (e) => {
        e.preventDefault();
        createNewCard(message);
        setMessage('');
    };

    return (
        <div>
            <h2>Create a New Card</h2>
            <form onSubmit={submitNewCard} className='new-card-form'>
                <label>Message</label>
                <input 
                    type='text'
                    value={message}
                    onChange={handleMessageChange} 
                    placeholder='Add a message'
                />
                <p>Preview: {message} </p>
                <input type="Submit"
                disabled={message.length === 0 || message.length > 40}
                />
            </form>
        </div>
    )
}

export default CardForm;