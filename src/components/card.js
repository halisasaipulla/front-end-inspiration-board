import './card.css';

<<<<<<< HEAD
const Card = ({ card, deleteCard, likeCard }) => {
    return (
    <div className='card'>
        <h4>{card.message}</h4>
        <div>
            <span className='card-bottom'>{card.likes_count}</span>
            <span onClick={() => {likeCard(card)}} className='card-bottom'>❤️</span>
            <span onClick={() => {deleteCard(card)}} className='card-bottom'>🗑</span>
=======

const Card = () => {
    return (<div className='note'>
        <span>Our first card!</span>
        <div className="note-footer">
            <small>30/06/2021</small>
>>>>>>> 334636b47eb0eb57ba1867ad363852e23d374c0f
        </div>
    </div>);
    
};

export default Card;