import Card from './card';
import CardForm from './cardForm';
import React, { useState } from 'react';
import axios from 'axios';

const CardList = ({selectedBoard}) => {
    const [cardsData, setCardsData] = useState([
        {'card_id': 1, 
         'likes_count':0,
         'message': 'Hello world!'},
    ]);
    const id = String(selectedBoard.id)
        console.log(id)
    
        const deleteCardItem = (card) => {
            axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`).then((response) => {
              const newCardsData = cardsData.filter((existingCard) => {
                return existingCard.card_id !== card.card_id;
              });
              setCardsData(newCardsData);
            }).catch((error) => {
              console.log('Error:', error);
              alert('Couldn\'t delete the card.');
            });
          };
    
    
    const plusOneCardItem = (card) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/boards/${id}/cards/${card.card_id}/like`).then((response) => {
          const newCardsData = cardsData.map((existingCard) => {
            return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
          });
          setCardsData(newCardsData);
        }).catch((error) => {
          console.log('Error:', error);
          alert('Couldn\'t +1 the card.');
        });
      };
      const cardElements = cardsData.map((card) => {
        return (<Card
            card={card}
            plusOneCardItem={plusOneCardItem}
            deleteCardItem={deleteCardItem}>
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