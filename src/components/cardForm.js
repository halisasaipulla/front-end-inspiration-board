import React, { useState } from 'react';
import './cardForm.css';

const CardForm = ({createNewCard}) => {
    const [message, setMessage]=useState('');
    const [colour, setColour]=useState('');
    
    const handleMessageChange = (e) => {
        console.log(e.target.value); 
        setMessage(e.target.value); };
    
    const submitNewCard = (e) => {
        e.preventDefault();
        console.log(message);
        
        createNewCard({ message });
        setMessage('');  
    }
    const changeCardColour=(e)=>{
        console.log(colour)
        setColour(e.target.value);
      
        
    }
    

    return (
        <div>
            <form onSubmit={submitNewCard} className='new-board-form'>
                <label>Message</label>
                <input 
                    type='text'
                    value={message}
                    onChange={handleMessageChange}
                    placeholder='Add a message'
                />
                 <select 
                    className="textfield" onChange={changeCardColour}>
                    {/* // onChange={e => this.setState({ colour: e.target.value})}> */}
                    <option value="" disabled selected>Post-it Colour</option>
                    <option value="pink">Pink</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                </select> 
                
                
                <p>Preview: {message} </p>
                <input type="Submit"
                // disabled={((title.length === 0) || (owner.length === 0) || (title.length > 40) || (owner.length > 40))}
                />
                

          
            </form>
        </div>
    )
}

export default CardForm;