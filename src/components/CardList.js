import Card from './card';
import CardForm from './cardForm';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = ({selectedBoard}) => {
    const [cardsData, setCardsData] = useState([
        {'card_id': 1, 
        
         'message': 'Hello world!'},
    ]);
    const id = String(selectedBoard.id)
        console.log(id)
    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`).then((response)=> {
    //       setCardsData(response.data);
    //     }).catch((error) => {
    //       console.log('Error:', error);
    //       alert('Couldn\'t get cards for this board.');
    //     });
    //   }, [selectedBoard]);

    const cardElements = cardsData.map((card) => {
        return (<Card
            card={card}
            ></Card>)
    });
    const createNewCard = (message) => {
        // console.log(selectedBoard.id)
        // const id = String(selectedBoard.id)
        // console.log(id)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards`,message).then((response) => {
            console.log("Response:", response.data.card);
            
            const cards = [...cardsData];
            cards.push(response.data.card);
            setCardsData(cards);
        }).catch((error) => {
            console.log('Error:', error);
            alert('Couldn\'t create a new card.');
        });
    }

    return (
    <section className='card-list-sec'>
        <div>
            <h2>Cards for {selectedBoard.title} </h2>
            <div>
                {cardElements}
            </div>     
        </div>
        <div>
            <h2>Create a New Message</h2>
            <CardForm createNewCard={createNewCard}></CardForm>
        </div>
    </section>
    );
};

export default CardList;